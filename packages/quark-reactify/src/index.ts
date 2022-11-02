/**
 * Copy From https://github.com/BBKolton/reactify-wc/
 * Change to Adaptive QuarkElement
 * */
 import { Component, createRef, createElement, forwardRef } from 'react';

 const reactifyWebComponent = (WC: any) => {
   class Reactified extends Component {
     eventHandlers: any[];
 
     ref;
 
     constructor(props: any) {
       super(props);
       this.eventHandlers = [];
       const { innerRef } = props;
       this.ref = innerRef || createRef();
     }
 
     setEvent(event: string, val: Function) {
       this.eventHandlers.push([event, val]);
       this.ref.current.addEventListener(event, val);
     }
 
     update() {
       this.clearEventHandlers(); 
       if (!this.ref.current) return;
       //@ts-ignore
       Object.entries(this.props).forEach(([prop, val]) => {
         if (typeof val === 'function') {
           if (prop.match(/^on[A-Za-z]/)) {
             // 需要过滤掉原生支持的 click 事件
             const eventName = prop.substr(2).toLowerCase();
             if (eventName !== 'click') {
                return this.setEvent(eventName, val);
             }
           }
         }
         return true;
       });
     }
 
     componentDidUpdate() {
       this.update();
     }
 
     componentDidMount() {
       this.update();
     }
 
     componentWillUnmount() {
       this.clearEventHandlers();
     }
 
     clearEventHandlers() {
       this.eventHandlers.forEach(([event, handler]) => {
         this.ref.current.removeEventListener(event, handler);
       });
       this.eventHandlers = [];
     }
 
     render() {
      //@ts-ignore
       const { children, className, ...rest } = this.props;
       return createElement(
         WC,
         { class: className, ...rest, ref: this.ref },
         children
       );
     }
   }
 
   return forwardRef((props: any, ref: any) => {
     return createElement(Reactified, { ...props, innerRef: ref });
   });
 };
 
 export default reactifyWebComponent;
 