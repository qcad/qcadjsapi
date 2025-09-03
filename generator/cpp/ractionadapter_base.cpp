

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "ractionadapter_base.h"
  //#include "RActionAdapter_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for RActionAdapter

    // constructors:
    
  // Class: RActionAdapter
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1

      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      bool RActionAdapter_Base::isOverride(
      
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::isOverride()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("isOverride");
      QJSValue f = self.property("isOverride");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.isOverride();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.isOverride.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling isOverride:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::isOverride:" + res.toString());
        //}

        
            return RJSHelper::js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::isOverride"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::isOverride(
            
          );
        
    }

  RDocument* RActionAdapter_Base::getDocument(
      
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::getDocument()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("getDocument");
      QJSValue f = self.property("getDocument");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.getDocument();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.getDocument.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling getDocument:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::getDocument:" + res.toString());
        //}

        
            return RJSHelper_qcad::js2cpp_RDocument_ptr(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::getDocument"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::getDocument(
            
          );
        
    }

  RDocumentInterface* RActionAdapter_Base::getDocumentInterface(
      
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::getDocumentInterface()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("getDocumentInterface");
      QJSValue f = self.property("getDocumentInterface");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.getDocumentInterface();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.getDocumentInterface.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling getDocumentInterface:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::getDocumentInterface:" + res.toString());
        //}

        
            return RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::getDocumentInterface"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::getDocumentInterface(
            
          );
        
    }

  void RActionAdapter_Base::setDocumentInterface(
      RDocumentInterface* di
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::setDocumentInterface()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("setDocumentInterface");
      QJSValue f = self.property("setDocumentInterface");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RDocumentInterface(
    handler, 
    // non-copyable: true
di
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.setDocumentInterface();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.setDocumentInterface.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling setDocumentInterface:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::setDocumentInterface:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::setDocumentInterface"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::setDocumentInterface(
            di
          );
        
    }

  int RActionAdapter_Base::getState(
      
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::getState()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("getState");
      QJSValue f = self.property("getState");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.getState();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.getState.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling getState:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::getState:" + res.toString());
        //}

        
            return RJSHelper::js2cpp_int(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::getState"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::getState(
            
          );
        
    }

  void RActionAdapter_Base::beginEvent(
      
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::beginEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("beginEvent");
      QJSValue f = self.property("beginEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.beginEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.beginEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling beginEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::beginEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::beginEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::beginEvent(
            
          );
        
    }

  void RActionAdapter_Base::setGraphicsView(
      RGraphicsView* a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::setGraphicsView()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("setGraphicsView");
      QJSValue f = self.property("setGraphicsView");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RGraphicsView(
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
        //engine->evaluate("__self__.setGraphicsView();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.setGraphicsView.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling setGraphicsView:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::setGraphicsView:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::setGraphicsView"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::setGraphicsView(
            a1
          );
        
    }

  void RActionAdapter_Base::finishEvent(
      
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::finishEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("finishEvent");
      QJSValue f = self.property("finishEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.finishEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.finishEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling finishEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::finishEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::finishEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::finishEvent(
            
          );
        
    }

  void RActionAdapter_Base::enterEvent(
      
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::enterEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("enterEvent");
      QJSValue f = self.property("enterEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.enterEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.enterEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling enterEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::enterEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::enterEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::enterEvent(
            
          );
        
    }

  void RActionAdapter_Base::suspendEvent(
      
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::suspendEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("suspendEvent");
      QJSValue f = self.property("suspendEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.suspendEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.suspendEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling suspendEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::suspendEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::suspendEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::suspendEvent(
            
          );
        
    }

  void RActionAdapter_Base::resumeEvent(
      
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::resumeEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("resumeEvent");
      QJSValue f = self.property("resumeEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.resumeEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.resumeEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling resumeEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::resumeEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::resumeEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::resumeEvent(
            
          );
        
    }

  void RActionAdapter_Base::escapeEvent(
      
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::escapeEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("escapeEvent");
      QJSValue f = self.property("escapeEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.escapeEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.escapeEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling escapeEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::escapeEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::escapeEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::escapeEvent(
            
          );
        
    }

  void RActionAdapter_Base::keyPressEvent(
      QKeyEvent& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::keyPressEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("keyPressEvent");
      QJSValue f = self.property("keyPressEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper::cpp2js_QKeyEvent(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.keyPressEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.keyPressEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling keyPressEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::keyPressEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::keyPressEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::keyPressEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::keyReleaseEvent(
      QKeyEvent& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::keyReleaseEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("keyReleaseEvent");
      QJSValue f = self.property("keyReleaseEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper::cpp2js_QKeyEvent(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.keyReleaseEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.keyReleaseEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling keyReleaseEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::keyReleaseEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::keyReleaseEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::keyReleaseEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::mousePressEvent(
      RMouseEvent& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::mousePressEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("mousePressEvent");
      QJSValue f = self.property("mousePressEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RMouseEvent(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.mousePressEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.mousePressEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling mousePressEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::mousePressEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::mousePressEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::mousePressEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::mouseMoveEvent(
      RMouseEvent& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::mouseMoveEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("mouseMoveEvent");
      QJSValue f = self.property("mouseMoveEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RMouseEvent(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.mouseMoveEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.mouseMoveEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling mouseMoveEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::mouseMoveEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::mouseMoveEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::mouseMoveEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::mouseReleaseEvent(
      RMouseEvent& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::mouseReleaseEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("mouseReleaseEvent");
      QJSValue f = self.property("mouseReleaseEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RMouseEvent(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.mouseReleaseEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.mouseReleaseEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling mouseReleaseEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::mouseReleaseEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::mouseReleaseEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::mouseReleaseEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::mouseDoubleClickEvent(
      RMouseEvent& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::mouseDoubleClickEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("mouseDoubleClickEvent");
      QJSValue f = self.property("mouseDoubleClickEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RMouseEvent(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.mouseDoubleClickEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.mouseDoubleClickEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling mouseDoubleClickEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::mouseDoubleClickEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::mouseDoubleClickEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::mouseDoubleClickEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::wheelEvent(
      RWheelEvent& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::wheelEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("wheelEvent");
      QJSValue f = self.property("wheelEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RWheelEvent(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.wheelEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.wheelEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling wheelEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::wheelEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::wheelEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::wheelEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::tabletEvent(
      RTabletEvent& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::tabletEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("tabletEvent");
      QJSValue f = self.property("tabletEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RTabletEvent(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.tabletEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.tabletEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling tabletEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::tabletEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::tabletEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::tabletEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::swipeGestureEvent(
      QSwipeGesture& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::swipeGestureEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("swipeGestureEvent");
      QJSValue f = self.property("swipeGestureEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper::cpp2js_QSwipeGesture(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.swipeGestureEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.swipeGestureEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling swipeGestureEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::swipeGestureEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::swipeGestureEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::swipeGestureEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::panGestureEvent(
      QPanGesture& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::panGestureEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("panGestureEvent");
      QJSValue f = self.property("panGestureEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper::cpp2js_QPanGesture(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.panGestureEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.panGestureEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling panGestureEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::panGestureEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::panGestureEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::panGestureEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::pinchGestureEvent(
      QPinchGesture& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::pinchGestureEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("pinchGestureEvent");
      QJSValue f = self.property("pinchGestureEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper::cpp2js_QPinchGesture(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.pinchGestureEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.pinchGestureEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling pinchGestureEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::pinchGestureEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::pinchGestureEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::pinchGestureEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::commandEvent(
      RCommandEvent& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::commandEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("commandEvent");
      QJSValue f = self.property("commandEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RCommandEvent(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.commandEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.commandEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling commandEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::commandEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::commandEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::commandEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::commandEventPreview(
      RCommandEvent& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::commandEventPreview()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("commandEventPreview");
      QJSValue f = self.property("commandEventPreview");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RCommandEvent(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.commandEventPreview();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.commandEventPreview.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling commandEventPreview:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::commandEventPreview:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::commandEventPreview"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::commandEventPreview(
            a1
          );
        
    }

  void RActionAdapter_Base::coordinateEvent(
      RCoordinateEvent& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::coordinateEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("coordinateEvent");
      QJSValue f = self.property("coordinateEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RCoordinateEvent(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.coordinateEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.coordinateEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling coordinateEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::coordinateEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::coordinateEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::coordinateEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::coordinateEventPreview(
      RCoordinateEvent& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::coordinateEventPreview()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("coordinateEventPreview");
      QJSValue f = self.property("coordinateEventPreview");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RCoordinateEvent(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.coordinateEventPreview();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.coordinateEventPreview.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling coordinateEventPreview:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::coordinateEventPreview:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::coordinateEventPreview"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::coordinateEventPreview(
            a1
          );
        
    }

  void RActionAdapter_Base::entityPickEvent(
      REntityPickEvent& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::entityPickEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("entityPickEvent");
      QJSValue f = self.property("entityPickEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_REntityPickEvent(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.entityPickEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.entityPickEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling entityPickEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::entityPickEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::entityPickEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::entityPickEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::entityPickEventPreview(
      REntityPickEvent& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::entityPickEventPreview()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("entityPickEventPreview");
      QJSValue f = self.property("entityPickEventPreview");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_REntityPickEvent(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.entityPickEventPreview();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.entityPickEventPreview.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling entityPickEventPreview:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::entityPickEventPreview:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::entityPickEventPreview"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::entityPickEventPreview(
            a1
          );
        
    }

  void RActionAdapter_Base::propertyChangeEvent(
      RPropertyEvent& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::propertyChangeEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("propertyChangeEvent");
      QJSValue f = self.property("propertyChangeEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RPropertyEvent(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.propertyChangeEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.propertyChangeEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling propertyChangeEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::propertyChangeEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::propertyChangeEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::propertyChangeEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::zoomChangeEvent(
      RGraphicsView& a1
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::zoomChangeEvent()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("zoomChangeEvent");
      QJSValue f = self.property("zoomChangeEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RGraphicsView(
    handler, 
    // non-copyable: true

        &a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.zoomChangeEvent();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.zoomChangeEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling zoomChangeEvent:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::zoomChangeEvent:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::zoomChangeEvent"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::zoomChangeEvent(
            a1
          );
        
    }

  void RActionAdapter_Base::updatePreview(
      
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::updatePreview()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("updatePreview");
      QJSValue f = self.property("updatePreview");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.updatePreview();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.updatePreview.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling updatePreview:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::updatePreview:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::updatePreview"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::updatePreview(
            
          );
        
    }

  void RActionAdapter_Base::applyOperation(
      
    ) 
    
    {

      //qDebug() << "RActionAdapter_Base::applyOperation()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("applyOperation");
      QJSValue f = self.property("applyOperation");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.applyOperation();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.applyOperation.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling applyOperation:" << res.toString();
        //  engine->throwError("exception in: RActionAdapter::applyOperation:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RActionAdapter::applyOperation"));
      //}

      
          // call implementation of original class:
          return RActionAdapter::applyOperation(
            
          );
        
    }

  

      // public pure-virtual functions:
      