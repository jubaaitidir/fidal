



let title = "FIDAL";
let description = "Cordonnerie, ville de Garche";
let adress = "7 AV DU MAL LECLERC 92380 GARCHES";

let Infos = {
    "title": title,
    "description": description,
    "adress": adress,
    "products": [
        {
            "id_product": 1,
            "name_prod": "chaussures",
            "code_prod": "chaussures-cuire",
            "description": "nos chaussures sont en cuire",
            "img_prod_src": 'chaussures.jpg',
            "price": 100,
            "isSpecialOffer": false
        },
        {
            "id_product": 2,
            "name_prod": "produits d'entretiens",
            "code_prod": "produits-entretien",
            "description": "les incontournables",
            "img_prod_src": "produits_entretien.jpg",
            "price": 25,
            "isSpecialOffer": false

        },
        {
            "id_product": 3,
            "name_prod": "clé et sécurité",
            "code_prod": "clé-et-sécurité",
            "description": "renforcer la sécurité de votre habitation",
            "img_prod_src": "cle_securite.jpg",
            "price": 12,
            "isSpecialOffer": false
        },
        {
            "id_product": 4,
            "name_prod": "chaussures maron cuire",
            "code_prod": "chaussures-maron-cuire-soldes",
            "description": "nos chaussures sont en cuire",
            "img_prod_src": 'chaussures.jpg',
            "price": 45,
            "isSpecialOffer": true
        },
        {
            "id_product": 5,
            "name_prod": "clé soldes",
            "code_prod": "clé-soldes",
            "description": "des clé en double à moitié prix",
            "img_prod_src": "cle_securite.jpg",
            "price": 6,
            "isSpecialOffer": true
        }
    

    ],
    "team": [
        {
            "first_name": "FIDAL",
            "last_name": "JOACQUIME",
            "role": "Le boss",
            "social_networks": ["https://www.fb.com", "https://www.twitter.com"],
            "img_emp_src": "../images/fidal_joacquime.jpg"

        },
    ],
    "history": [
        {
            "title": "Our Story",
            "description": String("MonCordonnier.com, un savoir-faire ancien avec des moyens modernes.Un savoir-faire ancien dans la cordonnerie traditionnelle depuis 1945 avec l\’ouverture de l’atelier du grand-père Jean Valverde dans le quartier de St Loup à Marseille.Ses deux fils André(l\’ainé) et Hervé(le cadet) ont ensuite pris la relève pour devenir à leur tour maître cordonnier jusqu’à leur départ en retraite.En 2017, Aurélie et Sébastien(les enfants d’Hervé), constatant que ce savoir - faire familial risquait de disparaître, décident de relancer l’activité en ouvrant un nouvel atelier entièrement équipé à Aubagne. Charge à André et Hervé de reprendre du service en formant une nouvelle équipe de cordonniers qui bénéficieront de leurs compétences en respectant la devise du grand - père Jean : “Toujours restituer aux clients un travail d’une qualité irréprochable!” .Aurélie et Sébastien apportent leur pierre à l’édifice en lançant le service en ligne."),
            "author": "FIDAL JOACQUIME",
            "hist_img": "../images/fidal_joacquime.jpg"
        }
    ]

}
export default Infos;