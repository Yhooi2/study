// Format date to GitHub ISO string format
export const formatDate = (date: Date): string => {
  return date.toISOString();
};

// Validate date string format
export const isValidDateString = (dateString: string): boolean => {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

// Validate that createdAt is not in the future
export const validateCreatedAt = (createdAt: string): boolean => {
  if (!isValidDateString(createdAt)) {
    return false;
  }
  const createdAtDate = new Date(createdAt);
  const now = new Date();
  return createdAtDate <= now;
};

// Get all year ranges from account creation to current date
export const getAllYearRanges = (createdAt: string, currentDate: Date = new Date()) => {
  if (!validateCreatedAt(createdAt)) {
    throw new Error('Invalid createdAt date or date is in the future');
  }

  const createdAtDate = new Date(createdAt);
  const startYear = createdAtDate.getFullYear();
  const endYear = currentDate.getFullYear();
  
  const yearRanges: Record<string, { from: string; to: string }> = {};
  
  for (let year = startYear; year <= endYear; year++) {
    const yearKey = `year${year - startYear + 1}`;
    
    const fromDate = year === startYear 
      ? new Date(createdAtDate) // Use actual creation date for first year
      : new Date(year, 0, 1); // Jan 1 for subsequent years
    
    const toDate = year === endYear
      ? new Date(currentDate) // Use current date for last year
      : new Date(year, 11, 31, 23, 59, 59); // Dec 31 for other years
    
    yearRanges[yearKey] = {
      from: formatDate(fromDate),
      to: formatDate(toDate)
    };
  }
  
  return yearRanges;
};

// Get date ranges for last 3 years (updated to use getAllYearRanges)
export const getThreeYearRanges = (currentDate: Date = new Date()) => {
  const threeYearsAgo = new Date(currentDate);
  threeYearsAgo.setFullYear(currentDate.getFullYear() - 2);
  
  const mockCreatedAt = formatDate(threeYearsAgo);
  const allRanges = getAllYearRanges(mockCreatedAt, currentDate);
  
  // Return only the last 3 years
  const keys = Object.keys(allRanges);
  const lastThreeKeys = keys.slice(-3);
  
  const result: Record<string, { from: string; to: string }> = {};
  lastThreeKeys.forEach((key, index) => {
    result[`year${index + 1}`] = allRanges[key];
  });
  
  return result;
};

// Get variables for main query period
export const getQueryDates = (daysBack: number = 365, currentDate: Date = new Date()) => {
  const to: Date = currentDate;
  const from: Date = new Date(currentDate.getTime() - daysBack * 24 * 60 * 60 * 1000);
  
  return {
    from: formatDate(from),
    to: formatDate(to)
  };
};