const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

export function getDirectories(source): string[] {
  const isDirectory = (source): void => {
    lstatSync(source).isDirectory();
  };

  const getDirectories = (source): string[] => readdirSync(source).map(name => join(source, name)).filter(isDirectory);

  const directories = getDirectories(source);
  console.log(directories);
  return directories;
}