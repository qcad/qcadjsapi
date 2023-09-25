

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "rcadtoolbar_base.h"
  //#include "RCadToolBar_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for RCadToolBar

    // constructors:
    
  // Class: RCadToolBar
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1

      // protected overwritten functions / events and their public invokable counterparts:
      void RCadToolBar_Base::contextMenuEvent(
      QContextMenuEvent* event
    ) {

      //qDebug() << "RCadToolBar_Base::contextMenuEvent()";

      //QJSValue f = self.prototype().property("contextMenuEvent");
      QJSValue f = self.property("contextMenuEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QContextMenuEvent(
    handler, 
    // non-copyable: false
event
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.contextMenuEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        RCadToolBar::contextMenuEvent(
          event
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      