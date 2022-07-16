export const bodyParser = (req) => {
    return new Promise<void>((resolve, reject) => {
      if (req.method !== 'POST') {
        resolve();
        return;
      }
  
      let data = '';
  
      req.on('data', (chunk) => {
        data += chunk.toString();
      })
  
      req.on('end', () => {
        try {
          // @ts-ignore
          req.body = JSON.parse(data);
        } catch (e) {
          // @ts-ignore
          req.body = {};
        }
        resolve();
      });
  
      req.on('error', (e) => {
        reject(e);
      });
    });
  }