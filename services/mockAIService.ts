export const generateMockResponse = (moduleName: string): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`This is a sample response from the ${moduleName} module, demonstrating its unique capabilities. The output is crafted to reflect the module's core function, providing a clear example of what to expect.`);
    }, 1000 + Math.random() * 1500);
  });
};
