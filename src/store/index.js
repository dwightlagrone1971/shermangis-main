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

			{ type: 'downloads', name: 'Addresses', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::addresses-1/about" },
			{ type: 'downloads', name: 'Building Footprints', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::building-footprints-1/about" },
			{ type: 'downloads', name: 'City Limits', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::city-limits-2/about" },
			{ type: 'downloads', name: 'Council Districts', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::council-districts-3/about" },
			{ type: 'downloads', name: 'E.T.J.', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::extra-territorial-jurisdiction-e-t-j-/about" },
			{ type: 'downloads', name: 'Parcels', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::parcels-1/about" },
			{ type: 'downloads', name: 'Road Centerlines', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::road-centerlines-1/about" },
			{ type: 'downloads', name: 'Thoroughfares', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::thoroughfare-plan-2022/about" },
			{ type: 'downloads', name: 'Zoning Districts', url: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::zoning-districts/about" },

			{ type: 'external', name: 'Annexations', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/2848ecc1229d454fa962392967548752' },
			{ type: 'external', name: 'CIP Projects', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/818c88c6c1264590810cb91a0db2c24a' },
			{ type: 'external', name: 'City Project Site (Original)', url: 'https://experience.arcgis.com/experience/edf1ffbd9dae4b12aeefc8b1ba594b26' },
			{ type: 'external', name: 'Council Districts', url: 'https://experience.arcgis.com/experience/f2ead96f4ef14f19bf2e23767b65d200' },
			{ type: 'external', name: 'Development Projects', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/5628948f1c1a464da61cc0bf966badf0' },
			{ type: 'external', name: 'Emergency Sirens', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/a3685004829d4465abd34e067f30c5fb' },
			{ type: 'external', name: 'Flood Zones (2023)', url: 'https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=a8237551de654fa1ab568ad83c685253' },
			{ type: 'external', name: 'Future Landuse', url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/f408802be3f04be2a2c699a033a878b3' },
			{ type: 'external', name: 'Parks & Recreation', url: 'https://experience.arcgis.com/experience/7f30c9436abd408391d472171b504f3c/?draft=true' },
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
			                                                           
			{ type: 'infographics', name: '2023 Census Summary', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/efc39b7428244ff1b1af5ac56cc1f7c6/data' },
			{ type: 'infographics', name: 'At Risk Population', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/e0c48bed80c34c78bbb240d02d36f072/data' },
			{ type: 'infographics', name: 'Childhood & Female Equity', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/c849568be7e049858268186929f9e95f/data' },
			{ type: 'infographics', name: 'Community Change Snapshot', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/63a1abdc2c92481ca7f15e69651f6b3a/data' },
			{ type: 'infographics', name: 'Community Profile', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/a8de093170a54f3f86aae4b773e22656/data' },
			{ type: 'infographics', name: 'Communite Profile', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/f7d1e808f4884e53bbdb066fccd2e0f0/data' },
			{ type: 'infographics', name: 'Demography Summary', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/7bcb90c26f6646e0bc582972c7ced355/data' },
			{ type: 'infographics', name: 'Employment Overview', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/03a3ef5669a8432c9e6b9d5250c1e072/data' },
			{ type: 'infographics', name: 'Healthcare & Insurance', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/89eba46f3e6d4e9bb6f82239029b8b4e/data' },
			{ type: 'infographics', name: 'Key Facts', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/53c27765695d458aa3f316053e730391/data' },
			{ type: 'infographics', name: 'Population Trends', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/4bc7fe0d4bf24dbe80a7aca1b5b77eb4/data' },
			{ type: 'infographics', name: 'Tapestry Profile', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/d408af53cef744f8b492fc0516df7a36/data' },
			
			{ type: 'internal', name: 'Code Incidents (2024)', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=83d4528b6352402d9ce262c45a07e11a'},
			{ type: 'internal', name: 'Code Incidents (All)', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=2e9d062f4c6e4cac9ec10024ebc8eb7b'},
			{ type: 'internal', name: 'Code Simple Map', url: 'https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=97013d9eff694c059406229d9df88b37'},
			{ type: 'internal', name: 'Detailed Parks Map', url: 'https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=cf482ea52d5740ddb490a36157167b74'},
			{ type: 'internal', name: 'Flushing Locations', url: 'https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=cd171035c62b4db98271bafaf78f5758'},
			{ type: 'internal', name: 'Mowing Map', url: 'https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=ddab962963934f83bc0639b135562d26'},
			{ type: 'internal', name: 'Storm Water Fees', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=6ff28e8cc3fa4cd69d80b9077eec3f1c'},
			
			{ type: 'menuItems', name: 'Featured Items', to: '/' },
			{ type: 'menuItems', name: 'GIS Data', to: '/download' },
			{ type: 'menuItems', name: 'Infographics', to: '/infographics' },
			{ type: 'menuItems', name: 'Internal Maps', to: '/internal' },
			{ type: 'menuItems', name: 'Maps', to: '/pdfmaps' },
			{ type: 'menuItems', name: 'About Page', to: '/about' },			
			
			{ type: 'pdfMaps', name: 'City Limits Map', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/2dab9848f87b489abb3bb1f5fb39616b/data' },
			{ type: 'pdfMaps', name: 'Control Monuments', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/878a50934b3b4adc85218e46af40f77d/data' },
			{ type: 'pdfMaps', name: 'Council District Map', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/eb9618ce75314413ad4819f8d3f1b202/data' },
			{ type: 'pdfMaps', name: 'Future Landuse', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/a432bc22115d4bb48893ab4e65a1cf2b/data' },
			{ type: 'pdfMaps', name: 'Future Trails', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/c580d8564c324c3982e3cd91be7056a3/data' },
			{ type: 'pdfMaps', name: 'E.T.J. Map', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/48e428e63b6f451b9b58e1a8c14efe23/data' },
			{ type: 'pdfMaps', name: 'Planned Developments', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/cf38bef2ed614d07bd278e806b84ab39/data' },
			{ type: 'pdfMaps', name: 'Sherman Schools', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/098b94114bec4031a3638978be32874e/data' },
			{ type: 'pdfMaps', name: 'Thoroughfare Map', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/2378452606ac4c0f940ec6c4e20e82ec/data' },
			{ type: 'pdfMaps', name: 'Zoning Map', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/84a02175a8fc495ca1314ecaac4394ea/data' },
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
