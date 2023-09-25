

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "rsnapreference_base.h"
  //#include "RSnapReference_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for RSnapReference

    // constructors:
    
  // Class: RSnapReference
  // Function: 
  // Parameters: 0
  // preceding Parameters: -1

      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      void RSnapReference_Base::showUiOptions(
      
    ) 
    
    {

      //qDebug() << "RSnapReference_Base::showUiOptions()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("showUiOptions");
      QJSValue f = self.property("showUiOptions");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.showUiOptions();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.showUiOptions.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling showUiOptions:" << res.toString();
        //  engine->throwError("exception in: RSnapReference::showUiOptions:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RSnapReference::showUiOptions"));
      //}

      
          // call implementation of original class:
          return RSnapReference::showUiOptions(
            
          );
        
    }

  void RSnapReference_Base::hideUiOptions(
      
    ) 
    
    {

      //qDebug() << "RSnapReference_Base::hideUiOptions()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("hideUiOptions");
      QJSValue f = self.property("hideUiOptions");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.hideUiOptions();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.hideUiOptions.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling hideUiOptions:" << res.toString();
        //  engine->throwError("exception in: RSnapReference::hideUiOptions:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RSnapReference::hideUiOptions"));
      //}

      
          // call implementation of original class:
          return RSnapReference::hideUiOptions(
            
          );
        
    }

  

      // public pure-virtual functions:
      