const PATH = `https://cdn.plexfinance.us/sequnce-assets/`;

export const BNB2WAYA_PATH = `${PATH}bnb2waya/bnb2waya-`;
export const BNB2WAYA_COUNTS = 31;

export const WAYA2BNB_PATH = `${PATH}wayabnb/waya2bnb-`;
export const WAYA2BNB_COUNTS = 31;

export const FILE_TYPE = `.png`;

const pathGenerator = (path: string) => (d: string, index: number) => {
  if (index < 10) return `${path}0${index}${FILE_TYPE}`;
  return `${path}${index}${FILE_TYPE}`;
};

export const bnb2WayaImages = () => {
  let result: string[] = new Array(BNB2WAYA_COUNTS);
  result.fill("");
  result = result.map(pathGenerator(BNB2WAYA_PATH));
  return result;
};

export const waya2BnbImages = () => {
  let result: string[] = new Array(WAYA2BNB_COUNTS);
  result.fill("");
  result = result.map(pathGenerator(WAYA2BNB_PATH));
  return result;
};
