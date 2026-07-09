import { t } from '@/i18n';
import { createPlugin } from '@/utils';

import { defaultInAppMenuConfig } from './constants';
import { onMainLoad } from './main';
import { onMenu } from './menu';
import { onConfigChange, onPlayerApiReady, onRendererLoad } from './renderer';
import titlebarStyle from './titlebar.css?inline';

export default createPlugin({
  name: () => t('plugins.in-app-menu-stylus-fix.name'),
  description: () => t('plugins.in-app-menu-stylus-fix.description'),
  restartNeeded: true,
  config: defaultInAppMenuConfig,
  stylesheets: [titlebarStyle],
  menu: onMenu,

  backend: onMainLoad,
  renderer: {
    start: onRendererLoad,
    onPlayerApiReady,
    onConfigChange,
  },
});
