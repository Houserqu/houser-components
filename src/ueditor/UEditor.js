import React, {Component} from 'react';

/*
 ueditor react封装，借鉴网上

 ueditor文件最好在html里通过srcipt方式引入，通过webpack打包会出现各种问题，也会增加包的体积
 ueditor文档: http://fex.baidu.com/ueditor/#start-toolbar

 页面上多处使用此组件的时候，需要保证传入的id不同
 */

class UEditor extends Component {
  constructor(props) {
    super(props);
    this.uedeitor = {}
  }

  componentDidMount() {
    this.initEditor();
  }

  componentWillUnmount() {
    // 组件卸载后，清除放入库的id
    UE.delEditor(this.props.id);
  }

  initEditor() {
    const {initValue, uploadAPI, id} = this.props;

    this.uedeitor = UE.getEditor(this.props.id, {
      serverUrl: uploadAPI,
    });

    // 此处用于拦截上传事件，用于自定义上传路径
    /*
    UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
    UE.Editor.prototype.getActionUrl = function (action) {
      if (action === "uploadimage" || action === 'uploadscrawl' || action === 'uploadimage' || action === 'uploadvideo') {
        return 'admin/ueditor/attachment/upload';
      } else {
        return this._bkGetActionUrl.call(this, action);
      }
    }
    */

    const self = this;
    this.uedeitor.ready((ueditor) => {
      if (!ueditor) {
        UE.delEditor(id);
        self.initEditor();
      }
      if (initValue) {
        this.uedeitor.setContent(initValue);
      }
    })
  }

  componentDidUpdate() {
    const {initValue} = this.props;
    this.uedeitor.ready((ueditor) => {
      if (initValue) {
        this.uedeitor.setContent(initValue);
      }
    })
  }

  render() {
    return (
      <div
        id={this.props.id}
        name="content"
        type="text/plain" 
        style={{ width: '100%' }}/>
    )
  }
}

export default UEditor;
