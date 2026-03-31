#!/bin/bash

# Performance Lighthouse Audit Script
# Runs comprehensive Lighthouse audit and generates HTML report
# Usage: ./run_lighthouse.sh <url> [output-dir]
# Example: ./run_lighthouse.sh https://example.com ./reports
# Example: ./run_lighthouse.sh http://localhost:3000 ./reports

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
URL="${1:?Error: URL is required. Usage: $0 <url> [output-dir]}"
OUTPUT_DIR="${2:-.}"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
REPORT_NAME="lighthouse_${TIMESTAMP}"
REPORT_FILE="${OUTPUT_DIR}/${REPORT_NAME}.html"
JSON_REPORT="${OUTPUT_DIR}/${REPORT_NAME}.json"

# Ensure output directory exists
mkdir -p "${OUTPUT_DIR}"

echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}Lighthouse Performance Audit${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${YELLOW}URL:${NC} ${URL}"
echo -e "${YELLOW}Output Directory:${NC} ${OUTPUT_DIR}"
echo -e "${YELLOW}Report Name:${NC} ${REPORT_NAME}"
echo ""

# Check if lighthouse is installed
if ! command -v lighthouse &> /dev/null; then
    echo -e "${RED}Error: Lighthouse CLI is not installed${NC}"
    echo "Install with: npm install -g lighthouse"
    exit 1
fi

# Display Lighthouse version
LIGHTHOUSE_VERSION=$(lighthouse --version)
echo -e "${YELLOW}Lighthouse Version:${NC} ${LIGHTHOUSE_VERSION}"
echo ""

# Run Lighthouse audit
echo -e "${YELLOW}Running Lighthouse audit...${NC}"
echo ""

lighthouse "${URL}" \
    --chrome-flags="--headless" \
    --output-path="${JSON_REPORT}" \
    --output=json \
    --quiet

# Check if audit succeeded
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Audit completed successfully${NC}"
else
    echo -e "${RED}✗ Audit failed${NC}"
    exit 1
fi

# Parse JSON results for scores
PERF_SCORE=$(jq '.categories.performance.score * 100' "${JSON_REPORT}" 2>/dev/null || echo "N/A")
ACCESS_SCORE=$(jq '.categories.accessibility.score * 100' "${JSON_REPORT}" 2>/dev/null || echo "N/A")
BEST_PRACTICES=$(jq '.categories."best-practices".score * 100' "${JSON_REPORT}" 2>/dev/null || echo "N/A")
SEO_SCORE=$(jq '.categories.seo.score * 100' "${JSON_REPORT}" 2>/dev/null || echo "N/A")

echo ""
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}Lighthouse Scores${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo ""

# Function to color-code scores
color_score() {
    local score=$1
    if (( $(echo "$score >= 90" | bc -l) )); then
        echo -e "${GREEN}${score}${NC}"
    elif (( $(echo "$score >= 50" | bc -l) )); then
        echo -e "${YELLOW}${score}${NC}"
    else
        echo -e "${RED}${score}${NC}"
    fi
}

echo -e "Performance:      $(color_score ${PERF_SCORE})"
echo -e "Accessibility:    $(color_score ${ACCESS_SCORE})"
echo -e "Best Practices:   $(color_score ${BEST_PRACTICES})"
echo -e "SEO:              $(color_score ${SEO_SCORE})"
echo ""

# Extract and display metrics
if command -v jq &> /dev/null; then
    echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
    echo -e "${BLUE}Core Web Vitals & Key Metrics${NC}"
    echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
    echo ""
    
    # Extract metrics
    FCP=$(jq '.audits."first-contentful-paint".displayValue' "${JSON_REPORT}" 2>/dev/null || echo "N/A")
    LCP=$(jq '.audits."largest-contentful-paint".displayValue' "${JSON_REPORT}" 2>/dev/null || echo "N/A")
    CLS=$(jq '.audits."cumulative-layout-shift".displayValue' "${JSON_REPORT}" 2>/dev/null || echo "N/A")
    TTI=$(jq '.audits."interactive".displayValue' "${JSON_REPORT}" 2>/dev/null || echo "N/A")
    TBT=$(jq '.audits."total-blocking-time".displayValue' "${JSON_REPORT}" 2>/dev/null || echo "N/A")
    SPEED_INDEX=$(jq '.audits."speed-index".displayValue' "${JSON_REPORT}" 2>/dev/null || echo "N/A")
    
    echo -e "First Contentful Paint (FCP): ${FCP}"
    echo -e "Largest Contentful Paint (LCP): ${LCP}"
    echo -e "Cumulative Layout Shift (CLS): ${CLS}"
    echo -e "Time to Interactive (TTI): ${TTI}"
    echo -e "Total Blocking Time (TBT): ${TBT}"
    echo -e "Speed Index: ${SPEED_INDEX}"
    echo ""
fi

# Extract opportunities (things to fix)
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}Top Opportunities for Improvement${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo ""

if command -v jq &> /dev/null; then
    jq -r '.audits | to_entries[] | select(.value.details != null and .value.details.items != null) | .key as $k | .value | select(.details.items | length > 0) | {title, savings: .details.items[0].savings} | "\(.title): ~\(.savings)ms savings"' "${JSON_REPORT}" 2>/dev/null | head -5 || echo "Run with jq for detailed opportunity breakdown"
fi

echo ""

# Generate summary
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}Files Generated${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${GREEN}✓ JSON Report:${NC} ${JSON_REPORT}"
echo ""

# Try to open in browser (optional)
if [ -f "${REPORT_FILE}" ] && command -v open &> /dev/null; then
    echo -e "${YELLOW}Opening report in browser...${NC}"
    open "${REPORT_FILE}"
elif [ -f "${REPORT_FILE}" ] && command -v xdg-open &> /dev/null; then
    echo -e "${YELLOW}Opening report in browser...${NC}"
    xdg-open "${REPORT_FILE}"
fi

echo ""
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}Audit complete!${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"

# Recommendations
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo "1. Review JSON report for detailed findings: ${JSON_REPORT}"
echo "2. Prioritize fixes by impact: High (70%+) → Medium (40-70%) → Low (<40%)"
echo "3. Target all categories >= 90 for production sites"
echo "4. Re-run audit after each major optimization"
echo ""

# Exit with appropriate code
if (( $(echo "$PERF_SCORE < 90" | bc -l) )); then
    echo -e "${YELLOW}Note: Performance score below 90. Optimization needed.${NC}"
    exit 0
fi

exit 0
