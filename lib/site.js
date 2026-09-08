export const site = {
  name: 'Centro Evangelístico Solamente Cree',
  shortName: 'Solamente Cree',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://solamentecree.com',
  phoneDisplay: '+34 687 43 10 33',
  phone: '+34687431033',
  email: 'dejan2huella@gmail.com',
  address: 'Av. de Guadalajara, 2, C.C. Las Rosas, CINESA Sala 7, 28032 Madrid',
  maps: 'https://maps.google.com/?q=Centro+Comercial+Las+Rosas+Madrid',
  whatsapp: 'https://wa.me/34687431033',
  socials: {
    youtube: 'https://www.youtube.com/user/dejan2huella',
    facebook: 'https://www.facebook.com/ManuelyTony',
    tiktok: 'https://www.tiktok.com/@manuelytony'
  }
};

export const images = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1WrukmxnPEF4ujBWthGjZmuJLbCT3ODFUAq37q7Zvcw19u-wbOLCfrgtTrPIfrjgLdyoUobDHIUDdIuOlrJ6MNniVep52wX7cjL-l1pzPSyjKrE9y7kKtCjeAQ9wcgcFcVWroKx17juyN3AlIQCawiQtEQqKjj2248Ki-e-Tf5uAMrSrG9R5YTCEBprjPUhoy4mr0zQpwOFavhbjeJexLoVHdHJwSUHUpZO44fQHYP1h-ApSzpQyQ-IaRfM',
  worship1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCutJftVnYLfG72MyJ-8Hx4vzJ-4IWtWrQ58Zk6SCERj8ukcmsRKVg4v6JFTChWT7Q9LvCwh-3wLPRQKs0IU3bSvx-tpfsQU226lWhwwRMHtA-G4xM4yIBNKJiSaQSWjwK4GrdcA1IxjjfJCHX4fIGBIAg07P6bD7rMwdE38WxnKZVLUGP0k28O45eeeX3JLOWZEOr3D6HM9_nceRaPoxVL8-01EcG_uwDA22T4hZaEIBg9wqsFmEzAew',
  preaching: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsmJdNfmPDtNg4kSRyVCaOH4yjrYYlNEx0Apn1bRpPscS5SHm5lVuaO_5fwQ_NZETBidZStLgPmiUtPoZ1r-3f6ZCI11N33rS2Q_1SCkeILKqhwVe46CTZs3EeCmIZsb9S1HdgxMXcgJJZhlBNM-jGpnQOjENGXLhHoTKZsuJ0RpTLWd10FWKFQyM5HNHGLSjLtif-u5kvvQNu9BL-2SKuqepbcZ1I6ABkADi9Ozj7Nm4vdZYW2ldNmw',
  worship2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBN_hALpxE4DYeyFG4GZnvYh9b6AhZCELcyCl_MLH0ASGq1lmGOgokkNQKmx9t1OU425vP0lN38rmVPtJyJDKn89RDnh_6xvuPxbSdzYhrAyQQBWlFMX1Emw9rPSEUU-3nfvjtImM1RshQGA9qHPHP0sLfLcSqL1K5BU0wnlqXbRzQp9naUd_8XEzdQea1KJMf7pavN3QzBn_G3NLYMPlcrg2tVqGXx6OusRfCXo9s4ubYuARt8amviA',
  community: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMhkkNt2gOG8Lhsc1w9bcs0oRVDZapmF9PX0X5QG6yLwk66kt9BJ0UBfJHi024d1zTd6P9fnmqMZT3JOF_1JLJuKII5Gnfq-cqeau5QOqZ_LoTWXRzQOqBO7RFL3oPSelChJwFVdmpw-Bw6mnK3wmZogvA-13sy_uQoukASXuWMqwBcOrygBy5KgtybMNQCJIR_asdyWv5KTiWgTto-UShqTHfbvtwSfZKlbu58U9Vm43XiI11brWl-g',
  location: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO8L4LYG3DtToQ41g5WWjtIvPnpF6hzryYdmt9rmZJS1jmqg0oiWGy1u6VI5sKtaS-bAc0mSUs2hHfGGEKyBFHebSHAXie7faatkY90VcVCsTK1ggnxTmF06_U78oC-4PGdcL6Q6l0ElJS5dTFf7cNjduWrsyWvZbESi_y8UzCcLvu_wwFnSZ5ALc_2cSK3KYvQMtg5zAADiIqEoEsJjJrCn2-5uYtdXgKAieNfZygmKgigV3Og3PIZQ',
  media: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWf4aaTvwOo0TOCRWE8dXS6sHTGk1VeaQ8MA9Jf3aCHVU_W6zfkuUgzErw1UWKnfS6qWY6oFqfH1HYpFdXotfuCG1tmSywGVOIHiymsnfQL7gyGxjGgpBDQ52lBDtuvAM9tCeDrhuW4lt3be8I0tri5Fmyhc6Cn6S9JwNQAsob2Zu2wY6p2ov-4zkrI69vixWk-g5OkK7jnoFpT3JExKjgf_yDDJi9UWlnPTc0NkTEGXE-AfDGyMUWOw'
};

export function absolute(path = '/') {
  return new URL(path, site.url).toString();
}
