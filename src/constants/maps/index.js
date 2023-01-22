export const API_KEY = 'AIzaSyCG6vyNJehtOlh2wuiYuk8Fz_5WxgU1Uhc'

export const URL_MAPS = (lat, lng, zoom =18) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x360&maptype=roadmap
&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${API_KEY}`;

export const URL_GEOCODING = (lat, lng) =>`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`;
