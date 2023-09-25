

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "rviewfocuslisteneradapter_base.h"
  //#include "RViewFocusListenerAdapter_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for RViewFocusListenerAdapter

    // constructors:
    
  // Class: RViewFocusListenerAdapter
  // Function: 
  // Parameters: 0
  // preceding Parameters: -1

      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      void RViewFocusListenerAdapter_Base::updateFocus(
      RGraphicsView* view
    ) 
    
    {

      //qDebug() << "RViewFocusListenerAdapter_Base::updateFocus()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("updateFocus");
      QJSValue f = self.property("updateFocus");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RGraphicsView(
    handler, 
    // non-copyable: true
view
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.updateFocus();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.updateFocus.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling updateFocus:" << res.toString();
        //  engine->throwError("exception in: RViewFocusListenerAdapter::updateFocus:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RViewFocusListenerAdapter::updateFocus"));
      //}

      
          // call implementation of original class:
          return RViewFocusListenerAdapter::updateFocus(
            view
          );
        
    }

  

      // public pure-virtual functions:
      