// Format date to GitHub ISO string format
export const formatDate = (date: Date): string => {
    return date.toISOString();
  };
  
  // Get date ranges for last 3 years
  export const getThreeYearRanges = (currentDate: Date = new Date()) => {
    const currentYear: number = currentDate.getFullYear();
    
    const year1: number = currentYear - 2;
    const year2: number = currentYear - 1; 
    const year3: number = currentYear;
    
    return {
      year1: {
        from: formatDate(new Date(year1, 0, 1)), // Jan 1
        to: formatDate(new Date(year1, 11, 31, 23, 59, 59)) // Dec 31
      },
      year2: {
        from: formatDate(new Date(year2, 0, 1)),
        to: formatDate(new Date(year2, 11, 31, 23, 59, 59))
      },
      year3: {
        from: formatDate(new Date(year3, 0, 1)),
        to: formatDate(currentDate) // up to today
      }
    };
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