import { expect, fixture } from '@open-wc/testing';
import sinon from 'sinon';
import ShareSheet from 'quarkd/lib/sharesheet';

const data = {
    titleColor: 'red',
    titleFontSize : 20,
    options: [
        { name: '微信', icon:  'https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png'}, 
        { name: '微信朋友圈', icon:  'https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png'}, 
        { name: 'QQ', icon:  'https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png'}, 
        { name: 'QQ空间', icon:  'https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png'}, 
        { name: '微博', icon:  'https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png'}, 
        { name: '二维码', icon:  'https://m.hellobike.com/resource/helloyun/16682/hvu4xjJpNY.png'}, 
    ],
    cancelColor: 'red',
    cancelFontSize: 20,
}
  
describe('<quark-sharesheet>', async () => {
  
    it('sharesheet attribute', async () => {
        const actionSheet = ShareSheet({
            titleColor: data.titleColor,
            titleFontSize: data.titleFontSize,
            options: data.options,
            cancelTextColor: data.cancelTextColor,
            cancelTextFontSize: data.cancelTextFontSize,
        });
        expect(actionSheet.titleColor).to.equal(data.titleColor);
        expect(actionSheet.titleFontSize).to.equal(data.titleFontSize);
        expect(actionSheet.options).to.equal(data.options);
        expect(actionSheet.cancelTextColor).to.equal(data.cancelTextColor);
        expect(actionSheet.cancelTextFontSize).to.equal(data.cancelTextFontSize);
    });

    it('event dispatch', async () => {
        const selecEvent = sinon.spy();
        const cancelEvent = sinon.spy()  
        const closeEvent = sinon.spy()   
        const actionSheet = ShareSheet({
            options: data.options,
            select: selecEvent,
            cancel: cancelEvent,
            close: closeEvent
        });
        actionSheet.select();
        expect(selecEvent.called).to.equal(true); 
        actionSheet.cancel();
        expect(cancelEvent.called).to.equal(true); 
        actionSheet.close();
        expect(closeEvent.called).to.equal(true); 
    });
  });
  