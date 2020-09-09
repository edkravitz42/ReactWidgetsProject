import React from 'react';

const Link = ({ href, className, children}) => {
    const onClick = (event) => {
        //allows browser to normally open in a new tab if ctrl clicked
        if(event.metakey || event.ctrlkey){
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    
    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
};

export default Link;