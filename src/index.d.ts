import { VNode } from 'preact';

interface Options {
  shallow?: boolean;
  xml?: boolean;
  pretty?: boolean;
}

export function render(vnode: VNode, context?: any, options?: Options):string;
export function shallowRender(vnode: VNode, context?: any):string;
export default render;
