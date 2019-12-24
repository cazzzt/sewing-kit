import {createPackage, Runtime} from '@sewing-kit/config';
import {createSewingKitPackagePlugin} from '../../config/sewing-kit';

export default createPackage((pkg) => {
  pkg.runtime(Runtime.Node);
  pkg.binary({name: 'sewing-kit', root: './src/index', aliases: ['sk']});
  pkg.use(createSewingKitPackagePlugin());
});
