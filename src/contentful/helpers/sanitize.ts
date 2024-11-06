export default function sanitizeResponse(response: any): any {
    if (response instanceof Object) {
      if (Array.isArray(response)) {
        // If the response is an array, filter out null elements and empty arrays
        const sanitizedArray = response
          .filter((item) => item !== null)
          .filter((item) => !(Array.isArray(item) && item.length === 0));
  
        return sanitizedArray.map((item) => sanitizeResponse(item));
      } else {
        // If the response is an object, filter out null values and empty objects
        const sanitizedObject: any = {};
        for (const key in response) {
          if (response[key] !== null) {
            if (Array.isArray(response[key]) && response[key].length === 0) {
              continue;
            } else if (typeof response[key] === 'object' && key != 'json') {
              const sanitizedValue = sanitizeResponse(response[key]);
              if (Object.keys(sanitizedValue).length > 0) {
                sanitizedObject[key] = sanitizedValue;
              }
            } else {
              sanitizedObject[key] = response[key];
            }
          }
        }
        return sanitizedObject;
      }
    } else {
      // If the response is not an object or array, return it as is
      return response;
    }
  }
  