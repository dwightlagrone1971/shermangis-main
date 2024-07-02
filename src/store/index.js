import { createStore } from 'vuex'


const store = createStore({

	state: () => ({
		currentItems: [],
		items: [
			{ type: 'about', name: 'What is GIS?', to: '/whatisgis' },
			{ type: 'about', name: 'What is GPS?', to: '/whatisgps' },
			{ type: 'about', name: 'Contact US', to: '/contacts' },

			{ type: 'contacts', name:'Dwight LaGrone', title:"GIS Manager", employer:'City of Sherman', address:'405 N Rusk St', city:'Sherman', state: '75090', phone:'(903) 892-7310', email:'mailto:dwightl@cityofsherman.com' },
			{ type: 'contacts', name:'Jerry Pace', title:"GIS Technician - Engineering", employer:'City of Sherman', address:'220 W Mulberry St', city:'Sherman', state:'Tx', zip:'75090', phone:'(903) 892-7621', email:'mailto:jerryp@cityofsherman.com' },
			{ type: 'contacts', name:'Cody Franks', title:"GIS Technician - Public Works", employer:'City of Sherman', address:'100 S Rusk St', city:'Sherman', state:'Tx', zip:'75090', phone:'(903) 892-7195', email:'mailto:codyf@cityofsherman.com' },
			
			{ type: 'downloads', name: 'Addresses', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/1c8bddf80c784970ad88baac8290dd16_0/about", src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/682c1a164de44874ac8f04e96477de55/data' },
			{ type: 'downloads', name: 'Annexations', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/8a158564e0ff4455b90253cb75c971c4_0/about", src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/e50942cc436b413cbbc94dc52300f6fb/data' },
			{ type: 'downloads', name: 'Building Footprints', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/a776a7f9406940989b3a123b86cadba2_1/about", src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/8da37022877e4b92a4f8b9944ec07800/data' },
			{ type: 'downloads', name: 'City Limits & ETJ', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::city-limits-etj-view/about", src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/267ff0c70cfe4ff0b70d94993a43dbfb/data' },
			{ type: 'downloads', name: 'Contours', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::contours-2ft-2022/about", src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/895bc2059eb6478da0bb8c03d54f5113/data' },
			{ type: 'downloads', name: 'Parcels', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::parcels-view/about", src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/c971adb636874066bed53b8735433d25/data' },
			{ type: 'downloads', name: 'Road Centerlines', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/6062350306cf4e41ae2b1e2aa6de0f83_2/about", src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/de63e3796f85415eb8291f8bc95797dd/data' },
			{ type: 'downloads', name: 'Zoning Districts', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::zoning-districts-view/about", src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/4fdf4221cc794c64a7470b2e1ea62d71/data' },

			{ type: 'external', name: 'Annexations', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/2848ecc1229d454fa962392967548752' },
			{ type: 'external', name: 'CIP Projects', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/818c88c6c1264590810cb91a0db2c24a' },
			{ type: 'external', name: 'City Project Site (Original)', url: 'https://experience.arcgis.com/experience/edf1ffbd9dae4b12aeefc8b1ba594b26' },
			{ type: 'external', name: 'Council Districts', url: 'https://experience.arcgis.com/experience/f2ead96f4ef14f19bf2e23767b65d200' },
			{ type: 'external', name: 'Development Projects', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/5628948f1c1a464da61cc0bf966badf0' },
			{ type: 'external', name: 'Emergency Sirens', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/a3685004829d4465abd34e067f30c5fb' },
			{ type: 'external', name: 'Flood Zones', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/6a2aedbb87a64b459e5eb2bdac3f4503' },
			{ type: 'external', name: 'Future Landuse', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/f408802be3f04be2a2c699a033a878b3' },
			{ type: 'external', name: 'Parks & Recreation', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/af44c4110ca24cc28ead1a6feac24a54' },
			{ type: 'external', name: 'Planned Developments', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/65fcbad2b4cb41cd94c5e33caca3232d' },
			{ type: 'external', name: 'Planning & Zoning', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/da82c92929e34750a26d95d5f8738cc6' },
			{ type: 'external', name: 'Sex Offender Restricted Areas', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/7797ab097a38493da51128f124d91370' },
			{ type: 'external', name: 'Sherman Schools', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/ba7afb45ee6d4e028fe81721efae9d01' },
			{ type: 'external', name: 'Thoroughfares', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/3b28c17a8cac472ab8ff18b0576cacfe' },
			{ type: 'external', name: 'Trash Pickup Days', url: 'https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=000839d23a014bd791bb19d4667f177c' },
			{ type: 'external', name: 'Zoning Districts', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/1e77f1f404ae4ff58043b6c88cdf1fd1' },			
			
			{ type: 'featured', name: 'ALL-IN-ONE', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/cb19b06c606f4ce1bd9e96b8817d4e07' },
			{ type: 'featured', name: 'Residential Dashboard', url: 'https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=efd3c1d6d3144c9eb11326ec20c79626' },
			{ type: 'featured', name: 'City Projects Site', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/7ef89fd885e04d8e82d4ff2195a94b94' },
			
			{ type: 'footer', name: "Sherman", url: "https://www.ci.sherman.tx.us/", alt:"City of Sherman" },
			{ type: 'footer', name: "Grayson", url: "https://www.co.grayson.tx.us/", alt:"Grayson County" },
			{ type: 'footer', name: "G-CAD", url: "https://www.graysonappraisal.org/", alt:"Grayson County" },
			{ type: 'footer', name: "TCOG", url: "https://www.tcog.com/", alt:"TCOG" },
			{ type: 'footer', name: "ESRI", url: "https://www.esri.com/en-us/home", alt:"ESRI" },
			                                                           
			{ type: 'infographics', name: '2023 Census Summary', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/efc39b7428244ff1b1af5ac56cc1f7c6/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/9b8f3fe0dd5f46c3a4eea009838410aa/data' },
			{ type: 'infographics', name: 'At Risk Population', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/e0c48bed80c34c78bbb240d02d36f072/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/7f04a09589fd43fd9159364ab09c7ee1/data' },
			{ type: 'infographics', name: 'Childhood & Female Equity', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/c849568be7e049858268186929f9e95f/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/8b5a911fd2f24ee1b8852c61eb307505/data' },
			{ type: 'infographics', name: 'Community Change Snapshot', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/63a1abdc2c92481ca7f15e69651f6b3a/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/d10ebceb90f14c87b6398199b810d264/data' },
			{ type: 'infographics', name: 'Community Profile', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/3f8023bb92d94139aed29b5486e76234/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/d10ebceb90f14c87b6398199b810d264/data' },
			{ type: 'infographics', name: 'Commute Profile', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/f7d1e808f4884e53bbdb066fccd2e0f0/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/3f8023bb92d94139aed29b5486e76234/data' },
			{ type: 'infographics', name: 'Demography Summary', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/7bcb90c26f6646e0bc582972c7ced355/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/9b15264c6a4d4a739381746b0a5fbacd/data' },
			{ type: 'infographics', name: 'Employment Overview', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/03a3ef5669a8432c9e6b9d5250c1e072/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/9b65ea88d2844833b7dee8d0ca00e209/data' },
			{ type: 'infographics', name: 'Healthcare & Insurance', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/89eba46f3e6d4e9bb6f82239029b8b4e/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/a995c356a93940a0a29ffcf702afb9ac/data' },
			{ type: 'infographics', name: 'Key Facts', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/53c27765695d458aa3f316053e730391/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/17246569e0674264b8d7c0851057e4b3/data' },
			{ type: 'infographics', name: 'Population Trends', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/4bc7fe0d4bf24dbe80a7aca1b5b77eb4/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/9fc0c996767f4d29aba858510ba2ac3d/data' },
			{ type: 'infographics', name: 'Tapestry Profile', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/d408af53cef744f8b492fc0516df7a36/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/b060991302eb42469e69ee75c074d705/data' },
			
			{ type: 'internal', name: 'Code Incidents (2024)', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=83d4528b6352402d9ce262c45a07e11a', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/0c2efea649894415befbc80903655849/data' },
			{ type: 'internal', name: 'Code Incidents (All)', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=2e9d062f4c6e4cac9ec10024ebc8eb7b', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/a84428d43a8e4b40a7876bc30e9ecc3d/data' },
			{ type: 'internal', name: 'Code Simple Map', url: 'https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=97013d9eff694c059406229d9df88b37', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/bbcdd4ed9be941a5afbdbe66e36ad24a/data' },
			{ type: 'internal', name: 'Detailed Parks Map', url: 'https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=cf482ea52d5740ddb490a36157167b74', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/c8cdb5736c714f528f531d26e79a517c/data' },
			{ type: 'internal', name: 'Flushing Locations', url: 'https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=cd171035c62b4db98271bafaf78f5758', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/a575919d2fc94cb1a5cc70ad267ecdbd/data' },
			{ type: 'internal', name: 'Hydrant Maintenance', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/0156ab1a620d49a0b052814da3be563a', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/3bc6980260af45caa27fe92925725e32/data'},
			{ type: 'internal', name: 'Mowing Map', url: 'https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=ddab962963934f83bc0639b135562d26', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/e4cd5a78b1934aa1b386dbccbac66344/data'},
			{ type: 'internal', name: 'Storm Water Fees', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=6ff28e8cc3fa4cd69d80b9077eec3f1c', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/8f1c813391004107a02eb625241c99c0/data'},
			
			{ type: 'menuItems', name: 'Featured Items', to: '/' },
			{ type: 'menuItems', name: 'GIS Data', to: '/download' },
			{ type: 'menuItems', name: 'Infographics', to: '/infographics' },
			{ type: 'menuItems', name: 'Internal Maps', to: '/internal' },
			{ type: 'menuItems', name: 'Maps', to: '/pdfmaps' },
			{ type: 'menuItems', name: 'About Page', to: '/about' },			
			
			{ type: 'pdfMaps', name: 'City Limits', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/2dab9848f87b489abb3bb1f5fb39616b/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/ab36330e7bf345be87c8c68428138e8f/data' },
			{ type: 'pdfMaps', name: 'Control Monuments', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/878a50934b3b4adc85218e46af40f77d/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/fb32de0fdebb4bbb8a1c782ce28448da/data'  },
			{ type: 'pdfMaps', name: 'Council Districts', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/eb9618ce75314413ad4819f8d3f1b202/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/ef309f38f54242de92515f6fc95c884f/data'  },
			{ type: 'pdfMaps', name: 'Future Landuse', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/a432bc22115d4bb48893ab4e65a1cf2b/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/531ff0b1479c4374881df228ed83e7dc/data'  },
			{ type: 'pdfMaps', name: 'Hike & Bike Trails', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/c580d8564c324c3982e3cd91be7056a3/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/1d56a1d17ccc4fc5873231f5dae79623/data'  },
			{ type: 'pdfMaps', name: 'E.T.J.', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/48e428e63b6f451b9b58e1a8c14efe23/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/527fe00ee0514c7ab1e36a5b2bd962bb/data'  },
			{ type: 'pdfMaps', name: 'Planned Developments', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/cf38bef2ed614d07bd278e806b84ab39/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/16158630feed43a69128a160bc0131c4/data'  },
			{ type: 'pdfMaps', name: 'Sherman Schools', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/098b94114bec4031a3638978be32874e/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/5d9f689b640a4cac92a8972433a0b544/data'  },
			{ type: 'pdfMaps', name: 'ThoroughfaresMap', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/2378452606ac4c0f940ec6c4e20e82ec/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/f77f25745f94400e82177fad3d5ac5fc/data'  },
			{ type: 'pdfMaps', name: 'Zoning Districts', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/84a02175a8fc495ca1314ecaac4394ea/data', src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/790f3a30644d4b659bedfcf315df8fd2/data'  },
		],
	}),


	mutations: {},
	actions: {},
	modules: {},
	getters: {
		getItems: (state) => (type) => {
    	return state.items.filter(item => item.type === type )
  	}
	}
})

export default store
