import 'intl';
import 'intl/locale-data/jsonp/id-ID';

export const convertToRp = (val) => {
    const rp = new Intl.NumberFormat('id-ID', {
    }).format(val)

    return 'Rp. ' + rp

}