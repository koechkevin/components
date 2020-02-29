import {
  faFile,
  faFileAlt,
  faFileExcel,
  faFileImage,
  faFilePdf,
  faFileVideo,
  faFileWord,
  IconDefinition,
} from '@fortawesome/pro-regular-svg-icons';
import { pathToRegexp } from 'path-to-regexp';
import urlRegex from 'url-regex';

import { MenuItemProps } from '../components/Menu/interface';
import { FileExtension, RolesConstants } from './constants';

/**
 * Check the array or object if is empty
 * @param {array | object} obj
 */
export function isEmpty(obj: any): boolean {
  return [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;
}

/**
 * Transfer url to url list
 * Example:
 *  '/userinfo/2019/id' => ['/userinfo', '/useinfo/2019, '/userindo/2019/id']
 *
 * @param {string} url
 * @return {string[]}
 */
export function urlToList(url: string): string[] {
  const urlList = url.split('/').filter((i: string) => i);
  return urlList.map((item: string, index) => `/${urlList.slice(0, index + 1).join('/')}`);
}

/**
 * Recursively flatten the data
 * Example:
 *  [{path: string}, {path: string}] => {path1, path2}
 *
 * @param {array} menu
 * @return {string[]}
 */
export function getFlatMenuKeys(menu: MenuItemProps[]): string[] {
  let keys: any[] = [];
  menu.forEach((item: MenuItemProps) => {
    keys.push(item.path);
    if (item.routes) {
      keys = keys.concat(getFlatMenuKeys(item.routes));
    }
  });
  return keys;
}

/**
 * Recursively replace the path
 * Example:
 *  [{path: string}, {path: string}] => {path1, path2}
 *
 * @param {array} menu
 * @return {string[]}
 */
export function replacePath(menu: MenuItemProps[], match: string, value: string): MenuItemProps[] {
  const formated = menu;
  formated.forEach((item: MenuItemProps) => {
    item.path = item.path.replace(match, value);
    if (item.routes) {
      replacePath(item.routes, match, value);
    }
  });
  return formated;
}

/**
 * Get menu matches
 * @param {string[]} flatMenuKeys
 * @return {string[]}
 */
export function getMenuMatches(flatMenuKeys: string[], path: string): string[] {
  const menus = flatMenuKeys.filter((item: string) => {
    if (!item) {
      return [];
    }
    return pathToRegexp(item).test(path);
  });
  return menus;
}

/**
 * Get default collapsed sub menus
 *
 * @param {string} pathname
 * @param {string[]} flatMenuKeys
 * @return {string[]}
 */
export function getDefaultCollapsedSubMenus(pathname: string, flatMenuKeys: string[]): string[] {
  const subMenus = urlToList(pathname)
    .map((item: string) => getMenuMatches(flatMenuKeys, item)[0])
    .filter((item: string) => item)
    .reduce((acc: any, curr: any) => [...acc, curr], ['/']);

  return subMenus;
}

/**
 * Get and concat the first character of user firstName and lastName
 * @param name
 */
export const getNameInitials = (name?: string) => {
  if (name) {
    const arr = name.split(' ');

    if (arr.length >= 2) {
      const str1 = arr[0].length >= 1 ? arr[0][0] : '';
      const str2 = arr[1].length >= 1 ? arr[1][0] : '';
      return `${str1}${str2}`;
    }

    return arr.length >= 1 ? arr[0] : '';
  }

  return '';
};

/**
 * url format
 * @param text
 */
export const urlConverter = (text: string = ''): string => {
  const replaced = text.replace(urlRegex({ strict: false }), (url) => {
    const location = url.indexOf('http') === -1 ? `http://${url}` : url;
    return `<a href="${location}" target="_blank">${url}</a>`;
  });
  return replaced;
};

/**
 * @description Returns the correct icon given an icon type
 * @param {FileExtension} iconType
 * @returns {IconDefinition}
 */
export const selectIcon = (iconType?: FileExtension): IconDefinition => {
  switch (iconType) {
    case FileExtension.pdf:
      return faFilePdf;
    case FileExtension.doc:
    case FileExtension.docx:
      return faFileWord;
    case FileExtension.png:
    case FileExtension.jpg:
    case FileExtension.tiff:
      return faFileImage;
    case FileExtension.xlsx:
    case FileExtension.xls:
      return faFileExcel;
    case FileExtension.mov:
    case FileExtension.mp4:
      return faFileVideo;
    case FileExtension.text:
      return faFileAlt;
    default:
      return faFile;
  }
};

/**
 *
 * @param role
 */
export const resolveRole = (role: RolesConstants | string): string => {
  switch (role) {
    case RolesConstants.AuroraAdmin:
      return 'Admin';
    case RolesConstants.CompanyOwner:
      return 'Owner';
    case RolesConstants.CompanyAdmin:
      return 'Admin';
    case RolesConstants.CompanyRecruiter:
      return 'Recruiter';
    case RolesConstants.CompanyMember:
      return 'Team Member';
    case RolesConstants.CompanyGuest:
      return 'Guest';
    case RolesConstants.CompanyBilling:
      return 'Billing';
    default:
      return role;
  }
};
