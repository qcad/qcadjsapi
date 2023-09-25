

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "rsnap_base.h"
  //#include "RSnap_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for RSnap

    // constructors:
    
  // Class: RSnap
  // Function: 
  // Parameters: 0
  // preceding Parameters: -1

      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      RVector RSnap_Base::snap(
      const RVector& position, RGraphicsView& view, double range
    ) 
    
    {

      //qDebug() << "RSnap_Base::snap()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("snap");
      QJSValue f = self.property("snap");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RVector(
    handler, 
    // non-copyable: false
position
  );


  args << RJSHelper_qcad::cpp2js_RGraphicsView(
    handler, 
    // non-copyable: true

        &view
  );


  args << RJSHelper::cpp2js_double(
    handler, 
    // non-copyable: false
range
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.snap();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.snap.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling snap:" << res.toString();
        //  engine->throwError("exception in: RSnap::snap:" + res.toString());
        //}

        
            return RJSHelper_qcad::js2cpp_RVector(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RSnap::snap"));
      //}

      
          // call implementation of original class:
          return RSnap::snap(
            position, view, range
          );
        
    }

  void RSnap_Base::showUiOptions(
      
    ) 
    
    {

      //qDebug() << "RSnap_Base::showUiOptions()";

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
        //  engine->throwError("exception in: RSnap::showUiOptions:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RSnap::showUiOptions"));
      //}

      
          // call implementation of original class:
          return RSnap::showUiOptions(
            
          );
        
    }

  void RSnap_Base::hideUiOptions(
      
    ) 
    
    {

      //qDebug() << "RSnap_Base::hideUiOptions()";

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
        //  engine->throwError("exception in: RSnap::hideUiOptions:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RSnap::hideUiOptions"));
      //}

      
          // call implementation of original class:
          return RSnap::hideUiOptions(
            
          );
        
    }

  

      // public pure-virtual functions:
      