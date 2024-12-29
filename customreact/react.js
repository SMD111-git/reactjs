//this customized render 
function customRender(reactElement, container) {
    /*const domElement = document.createElement(reactElement.type); 

    // Set innerHTML to children
    domElement.innerHTML = reactElement.children; 

    // Set attributes
    domElement.setAttribute('href', reactElement.props.href);  
    domElement.setAttribute('target', reactElement.props.target);  

    // Append to container
    container.appendChild(domElement);  */ 
    
    
    
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){//over here the looping is done in way that all key values  into index or tag propities
        //for in loop is used and prop variable is  used to loop in the props
        if (prop==='children')continue;/**
        What happens in the loop if statemnt?
        When we loop through the props to set the attributes of the DOM element, we skip the children property because it doesn't belong as an 
        attribute on the DOM element. Instead, children is the content inside the element, like the text between the opening and closing tags of an HTML element. */
        domElement.setAttribute(prop,reactElement.props[prop])//to get the key values of prop object
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a', // This can be any HTML tag
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    children: 'Click on it to visit Google' 
};

const mainContainer = document.querySelector('#root');  
customRender(reactElement, mainContainer); 
/*over here wqe are  creating custom rendering using the js first we create a varaible and get the root from the indexhtml file
then creatye a varaible reactelement that we create the tags and props and content to placed and the a function is create with a name of 
custom render and use dom methods to load the elements.
*/