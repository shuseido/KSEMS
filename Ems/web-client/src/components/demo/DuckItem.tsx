// we should make one component for one specific action functionality
// and make make one container to combine all component
// first of all always import React from 'react';
// last thing of component is export default one function and return a jsx element
// template could be like this
/*
    import React from 'react';

    export default function ComponentName(){
        return (
        )
    }
*/
// we make an interface Props for each component to get the properties that send from the using one
// in export function, we normally use parameter like (props: Props) and access its property by props.duck...
// we can simply do it like this ({duck} : Props) and simply access property to make clear

import React from 'react';
import { Duck } from '../../actions/demo';

interface Props {
    duck: Duck;
}

// export default function DuckItem(props: Props) { /* <<< dont use like this */
export default function DuckItem({ duck }: Props) {
    return (
        <div>
            <span> {duck.name} </span>
            <button onClick={() => duck.makeSound(duck.name + ' quack')}> Make Sound </button>
        </div>
    );
}
