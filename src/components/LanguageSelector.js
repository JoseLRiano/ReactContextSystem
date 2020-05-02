import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;

    render(){

        console.log(this.context)
        return (
            <div>
                Select a language:  
                <i onClick={() => this.context.onLanguageChange('english')} className="flag us" />
                <i onClick={() => this.context.onLanguageChange('spanish')} className="flag co" />
            </div>
        );
    }
}

export default LanguageSelector;