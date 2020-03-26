import React, {Component} from 'react';
import Search from 'fish-ui-ac/dist/Form/Search/SearchField';
import Table from 'fish-ui-ac/dist/Table/Table';

class App extends Component {
    render(){
        var rowData = [
            ["Dab","300","Fish"  ],
            ["Olive Flounder","800","Fish"  ],
            ["Red Snapper","3000","Fish"  ],
            ["Sea Butterfly","1000","Fish"  ],
            ["Carp","300","Fish"  ],
            ["Horse Mackerel","150","Fish"  ],
            ["Bitterling","900","Fish"  ],
            ["Loach","400","Fish"  ]];
        return( 
            <div>
                <Search/>
                <Table rows={rowData}/>
            </div>
        );
    }
}

export default App;