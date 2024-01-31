

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "rrulerqt_base.h"
  //#include "RRulerQt_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for RRulerQt

    // constructors:
    
  // Class: RRulerQt
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1

      // protected overwritten functions / events and their public invokable counterparts:
      void RRulerQt_Base::paintEvent(
      QPaintEvent* a1
    ) {

      //qDebug() << "RRulerQt_Base::paintEvent()";

      //QJSValue f = self.prototype().property("paintEvent");
      QJSValue f = self.property("paintEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QPaintEvent(
    handler, 
    // non-copyable: true
a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.paintEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        RRulerQt::paintEvent(
          a1
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      