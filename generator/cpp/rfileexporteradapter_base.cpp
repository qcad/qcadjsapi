

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "rfileexporteradapter_base.h"
  //#include "RFileExporterAdapter_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for RFileExporterAdapter

    // constructors:
    
  // Class: RFileExporterAdapter
  // Function: 
  // Parameters: 3
  // preceding Parameters: -1

  // Class: RFileExporterAdapter
  // Function: 
  // Parameters: 0
  // preceding Parameters: 3

      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      RDocument& RFileExporterAdapter_Base::getDocument(
      
    ) 
    
      const
    
    {

      //qDebug() << "RFileExporterAdapter_Base::getDocument()";

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
        //  engine->throwError("exception in: RFileExporterAdapter::getDocument:" + res.toString());
        //}

        
            return *RJSHelper_qcad::js2cpp_RDocument_ptr(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::getDocument"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::getDocument(
            
          );
        
    }

  void RFileExporterAdapter_Base::setColor(
      float r, float g, float b, float a
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::setColor()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("setColor");
      QJSValue f = self.property("setColor");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper::cpp2js_float(
    handler, 
    // non-copyable: false
r
  );


  args << RJSHelper::cpp2js_float(
    handler, 
    // non-copyable: false
g
  );


  args << RJSHelper::cpp2js_float(
    handler, 
    // non-copyable: false
b
  );


  args << RJSHelper::cpp2js_float(
    handler, 
    // non-copyable: false
a
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.setColor();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.setColor.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling setColor:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::setColor:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::setColor"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::setColor(
            r, g, b, a
          );
        
    }

  void RFileExporterAdapter_Base::setColor(
      const RColor& color
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::setColor()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("setColor");
      QJSValue f = self.property("setColor");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RColor(
    handler, 
    // non-copyable: false
color
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.setColor();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.setColor.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling setColor:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::setColor:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::setColor"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::setColor(
            color
          );
        
    }

  void RFileExporterAdapter_Base::setLineweight(
      RLineweight::Lineweight weight
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::setLineweight()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("setLineweight");
      QJSValue f = self.property("setLineweight");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RLineweight_Lineweight(
    handler, 
    // non-copyable: false
weight
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.setLineweight();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.setLineweight.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling setLineweight:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::setLineweight:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::setLineweight"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::setLineweight(
            weight
          );
        
    }

  void RFileExporterAdapter_Base::startExport(
      
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::startExport()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("startExport");
      QJSValue f = self.property("startExport");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.startExport();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.startExport.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling startExport:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::startExport:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::startExport"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::startExport(
            
          );
        
    }

  void RFileExporterAdapter_Base::endExport(
      
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::endExport()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("endExport");
      QJSValue f = self.property("endExport");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.endExport();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.endExport.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling endExport:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::endExport:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::endExport"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::endExport(
            
          );
        
    }

  void RFileExporterAdapter_Base::exportBlock(
      QSharedPointer<RBlock> a1
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportBlock()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportBlock");
      QJSValue f = self.property("exportBlock");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_QSharedPointer_RBlock(
    handler, 
    // non-copyable: false
a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportBlock();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportBlock.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportBlock:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportBlock:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportBlock"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportBlock(
            a1
          );
        
    }

  void RFileExporterAdapter_Base::exportBlock(
      RBlock::Id blockId
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportBlock()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportBlock");
      QJSValue f = self.property("exportBlock");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RBlock_Id(
    handler, 
    // non-copyable: false
blockId
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportBlock();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportBlock.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportBlock:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportBlock:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportBlock"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportBlock(
            blockId
          );
        
    }

  void RFileExporterAdapter_Base::exportEntities(
      bool allBlocks, bool undone, bool invisible
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportEntities()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportEntities");
      QJSValue f = self.property("exportEntities");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
allBlocks
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
undone
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
invisible
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportEntities();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportEntities.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportEntities:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportEntities:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportEntities"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportEntities(
            allBlocks, undone, invisible
          );
        
    }

  void RFileExporterAdapter_Base::endEntity(
      
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::endEntity()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("endEntity");
      QJSValue f = self.property("endEntity");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.endEntity();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.endEntity.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling endEntity:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::endEntity:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::endEntity"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::endEntity(
            
          );
        
    }

  void RFileExporterAdapter_Base::exportCurrentEntity(
      bool preview, bool forceSelected
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportCurrentEntity()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportCurrentEntity");
      QJSValue f = self.property("exportCurrentEntity");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
preview
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
forceSelected
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportCurrentEntity();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportCurrentEntity.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportCurrentEntity:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportCurrentEntity:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportCurrentEntity"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportCurrentEntity(
            preview, forceSelected
          );
        
    }

  void RFileExporterAdapter_Base::exportShape(
      QSharedPointer<RShape> shape
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportShape()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportShape");
      QJSValue f = self.property("exportShape");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_QSharedPointer_RShape(
    handler, 
    // non-copyable: false
shape
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportShape();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportShape.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportShape:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportShape:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportShape"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportShape(
            shape
          );
        
    }

  double RFileExporterAdapter_Base::exportLine(
      const RLine& line, double offset
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportLine()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportLine");
      QJSValue f = self.property("exportLine");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RLine(
    handler, 
    // non-copyable: false
line
  );


  args << RJSHelper::cpp2js_double(
    handler, 
    // non-copyable: false
offset
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportLine();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportLine.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportLine:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportLine:" + res.toString());
        //}

        
            return RJSHelper::js2cpp_double(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportLine"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportLine(
            line, offset
          );
        
    }

  void RFileExporterAdapter_Base::exportCircle(
      const RCircle& circle
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportCircle()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportCircle");
      QJSValue f = self.property("exportCircle");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RCircle(
    handler, 
    // non-copyable: false
circle
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportCircle();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportCircle.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportCircle:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportCircle:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportCircle"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportCircle(
            circle
          );
        
    }

  void RFileExporterAdapter_Base::exportArc(
      const RArc& arc, double offset
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportArc()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportArc");
      QJSValue f = self.property("exportArc");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RArc(
    handler, 
    // non-copyable: false
arc
  );


  args << RJSHelper::cpp2js_double(
    handler, 
    // non-copyable: false
offset
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportArc();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportArc.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportArc:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportArc:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportArc"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportArc(
            arc, offset
          );
        
    }

  void RFileExporterAdapter_Base::exportEllipse(
      const REllipse& ellipse, double offset
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportEllipse()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportEllipse");
      QJSValue f = self.property("exportEllipse");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_REllipse(
    handler, 
    // non-copyable: false
ellipse
  );


  args << RJSHelper::cpp2js_double(
    handler, 
    // non-copyable: false
offset
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportEllipse();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportEllipse.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportEllipse:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportEllipse:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportEllipse"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportEllipse(
            ellipse, offset
          );
        
    }

  void RFileExporterAdapter_Base::exportPolyline(
      const RPolyline& polyline, bool polylineGen, double offset
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportPolyline()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportPolyline");
      QJSValue f = self.property("exportPolyline");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RPolyline(
    handler, 
    // non-copyable: false
polyline
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
polylineGen
  );


  args << RJSHelper::cpp2js_double(
    handler, 
    // non-copyable: false
offset
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportPolyline();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportPolyline.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportPolyline:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportPolyline:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportPolyline"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportPolyline(
            polyline, polylineGen, offset
          );
        
    }

  void RFileExporterAdapter_Base::exportSpline(
      const RSpline& spline, double offset
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportSpline()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportSpline");
      QJSValue f = self.property("exportSpline");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RSpline(
    handler, 
    // non-copyable: false
spline
  );


  args << RJSHelper::cpp2js_double(
    handler, 
    // non-copyable: false
offset
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportSpline();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportSpline.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportSpline:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportSpline:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportSpline"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportSpline(
            spline, offset
          );
        
    }

  void RFileExporterAdapter_Base::exportPainterPaths(
      const QList<RPainterPath>& paths, double z
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportPainterPaths()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportPainterPaths");
      QJSValue f = self.property("exportPainterPaths");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_QList_RPainterPath(
    handler, 
    // non-copyable: false
paths
  );


  args << RJSHelper::cpp2js_double(
    handler, 
    // non-copyable: false
z
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportPainterPaths();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportPainterPaths.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportPainterPaths:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportPainterPaths:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportPainterPaths"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportPainterPaths(
            paths, z
          );
        
    }

  void RFileExporterAdapter_Base::exportImage(
      const RImageData& image, bool forceSelected
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportImage()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportImage");
      QJSValue f = self.property("exportImage");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RImageData(
    handler, 
    // non-copyable: false
image
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
forceSelected
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportImage();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportImage.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportImage:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportImage:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportImage"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportImage(
            image, forceSelected
          );
        
    }

  QList<RPainterPath> RFileExporterAdapter_Base::exportText(
      const RTextBasedData& text, bool forceSelected
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportText()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportText");
      QJSValue f = self.property("exportText");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RTextBasedData(
    handler, 
    // non-copyable: false
text
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
forceSelected
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportText();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportText.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportText:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportText:" + res.toString());
        //}

        
            return RJSHelper_qcad::js2cpp_QList_RPainterPath(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportText"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportText(
            text, forceSelected
          );
        
    }

  void RFileExporterAdapter_Base::exportTransform(
      const RTransform& t
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportTransform()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportTransform");
      QJSValue f = self.property("exportTransform");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RTransform(
    handler, 
    // non-copyable: false
t
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportTransform();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportTransform.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportTransform:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportTransform:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportTransform"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportTransform(
            t
          );
        
    }

  void RFileExporterAdapter_Base::exportEndTransform(
      
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportEndTransform()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportEndTransform");
      QJSValue f = self.property("exportEndTransform");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportEndTransform();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportEndTransform.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportEndTransform:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportEndTransform:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportEndTransform"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportEndTransform(
            
          );
        
    }

  bool RFileExporterAdapter_Base::isTextRenderedAsText(
      
    ) 
    
      const
    
    {

      //qDebug() << "RFileExporterAdapter_Base::isTextRenderedAsText()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("isTextRenderedAsText");
      QJSValue f = self.property("isTextRenderedAsText");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.isTextRenderedAsText();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.isTextRenderedAsText.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling isTextRenderedAsText:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::isTextRenderedAsText:" + res.toString());
        //}

        
            return RJSHelper::js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::isTextRenderedAsText"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::isTextRenderedAsText(
            
          );
        
    }

  QString RFileExporterAdapter_Base::getCorrectedFileName(
      const QString& fileName, const QString& nameFilter
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::getCorrectedFileName()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("getCorrectedFileName");
      QJSValue f = self.property("getCorrectedFileName");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper::cpp2js_QString(
    handler, 
    // non-copyable: false
fileName
  );


  args << RJSHelper::cpp2js_QString(
    handler, 
    // non-copyable: false
nameFilter
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.getCorrectedFileName();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.getCorrectedFileName.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling getCorrectedFileName:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::getCorrectedFileName:" + res.toString());
        //}

        
            return RJSHelper::js2cpp_QString(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::getCorrectedFileName"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::getCorrectedFileName(
            fileName, nameFilter
          );
        
    }

  bool RFileExporterAdapter_Base::exportFile(
      const QString& fileName, const QString& nameFilter, bool setFileName
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportFile()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportFile");
      QJSValue f = self.property("exportFile");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper::cpp2js_QString(
    handler, 
    // non-copyable: false
fileName
  );


  args << RJSHelper::cpp2js_QString(
    handler, 
    // non-copyable: false
nameFilter
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
setFileName
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportFile();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportFile.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportFile:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportFile:" + res.toString());
        //}

        
            return RJSHelper::js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportFile"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportFile(
            fileName, nameFilter, setFileName
          );
        
    }

  void RFileExporterAdapter_Base::exportPoint(
      const RPoint& a1
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportPoint()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportPoint");
      QJSValue f = self.property("exportPoint");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RPoint(
    handler, 
    // non-copyable: false
a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportPoint();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportPoint.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportPoint:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportPoint:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportPoint"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportPoint(
            a1
          );
        
    }

  void RFileExporterAdapter_Base::exportArcSegment(
      const RArc& a1, bool a2
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportArcSegment()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportArcSegment");
      QJSValue f = self.property("exportArcSegment");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RArc(
    handler, 
    // non-copyable: false
a1
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
a2
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportArcSegment();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportArcSegment.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportArcSegment:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportArcSegment:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportArcSegment"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportArcSegment(
            a1, a2
          );
        
    }

  void RFileExporterAdapter_Base::exportLineSegment(
      const RLine& a1, double a2
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportLineSegment()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportLineSegment");
      QJSValue f = self.property("exportLineSegment");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RLine(
    handler, 
    // non-copyable: false
a1
  );


  args << RJSHelper::cpp2js_double(
    handler, 
    // non-copyable: false
a2
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportLineSegment();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportLineSegment.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportLineSegment:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportLineSegment:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportLineSegment"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportLineSegment(
            a1, a2
          );
        
    }

  void RFileExporterAdapter_Base::exportTriangle(
      const RTriangle& a1
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportTriangle()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportTriangle");
      QJSValue f = self.property("exportTriangle");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RTriangle(
    handler, 
    // non-copyable: false
a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportTriangle();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportTriangle.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportTriangle:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportTriangle:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportTriangle"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportTriangle(
            a1
          );
        
    }

  void RFileExporterAdapter_Base::exportXLine(
      const RXLine& a1
    ) 
    
    {

      //qDebug() << "RFileExporterAdapter_Base::exportXLine()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("exportXLine");
      QJSValue f = self.property("exportXLine");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RXLine(
    handler, 
    // non-copyable: false
a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.exportXLine();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.exportXLine.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling exportXLine:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::exportXLine:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::exportXLine"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::exportXLine(
            a1
          );
        
    }

  double RFileExporterAdapter_Base::getLineTypePatternScale(
      const RLinetypePattern& p
    ) 
    
      const
    
    {

      //qDebug() << "RFileExporterAdapter_Base::getLineTypePatternScale()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("getLineTypePatternScale");
      QJSValue f = self.property("getLineTypePatternScale");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RLinetypePattern(
    handler, 
    // non-copyable: false
p
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.getLineTypePatternScale();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.getLineTypePatternScale.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling getLineTypePatternScale:" << res.toString();
        //  engine->throwError("exception in: RFileExporterAdapter::getLineTypePatternScale:" + res.toString());
        //}

        
            return RJSHelper::js2cpp_double(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileExporterAdapter::getLineTypePatternScale"));
      //}

      
          // call implementation of original class:
          return RFileExporterAdapter::getLineTypePatternScale(
            p
          );
        
    }

  

      // public pure-virtual functions:
      