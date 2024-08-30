

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "rpropertyeditor_base.h"
  //#include "RPropertyEditor_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for RPropertyEditor

    // constructors:
    
  // Class: RPropertyEditor
  // Function: 
  // Parameters: 0
  // preceding Parameters: -1

      // protected overwritten functions / events and their public invokable counterparts:
      void RPropertyEditor_Base::updateEditor(
      RObject& object, const QList<RPropertyTypeId>& propertyTypeIds, bool doUpdateGui, RDocument* document, bool showOnRequest
    ) {

      //qDebug() << "RPropertyEditor_Base::updateEditor()";

      //QJSValue f = self.prototype().property("updateEditor");
      QJSValue f = self.property("updateEditor");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RObject(
    handler, 
    // non-copyable: true

        &object
  );


  args << RJSHelper_qcad::cpp2js_QList_RPropertyTypeId(
    handler, 
    // non-copyable: false
propertyTypeIds
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
doUpdateGui
  );


  args << RJSHelper_qcad::cpp2js_RDocument(
    handler, 
    // non-copyable: true
document
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
showOnRequest
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.updateEditor.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        RPropertyEditor::updateEditor(
          object, propertyTypeIds, doUpdateGui, document, showOnRequest
        );
      }
    }

  void RPropertyEditor_Base::updateGui(
      bool onlyChanges
    ) {

      //qDebug() << "RPropertyEditor_Base::updateGui()";

      //QJSValue f = self.prototype().property("updateGui");
      QJSValue f = self.property("updateGui");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
onlyChanges
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.updateGui.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        RPropertyEditor::updateGui(
          onlyChanges
        );
      }
    }

  void RPropertyEditor_Base::updateProperty(
      const RPropertyTypeId& propertyTypeId, RObject& object, RDocument* document, bool showOnRequest
    ) {

      //qDebug() << "RPropertyEditor_Base::updateProperty()";

      //QJSValue f = self.prototype().property("updateProperty");
      QJSValue f = self.property("updateProperty");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RPropertyTypeId(
    handler, 
    // non-copyable: false
propertyTypeId
  );


  args << RJSHelper_qcad::cpp2js_RObject(
    handler, 
    // non-copyable: true

        &object
  );


  args << RJSHelper_qcad::cpp2js_RDocument(
    handler, 
    // non-copyable: true
document
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
showOnRequest
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.updateProperty.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        RPropertyEditor::updateProperty(
          propertyTypeId, object, document, showOnRequest
        );
      }
    }

  bool RPropertyEditor_Base::showCustomAppProperties(
      RPropertyAttributes::Option opt
    ) {

      //qDebug() << "RPropertyEditor_Base::showCustomAppProperties()";

      //QJSValue f = self.prototype().property("showCustomAppProperties");
      QJSValue f = self.property("showCustomAppProperties");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RPropertyAttributes_Option(
    handler, 
    // non-copyable: false
opt
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.showCustomAppProperties.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return RJSHelper::js2cpp_bool(handler, res);
          
      }
      else {
        
          return
        RPropertyEditor::showCustomAppProperties(
          opt
        );
      }
    }

  

      // public virtual overwritten functions / events:
      void RPropertyEditor_Base::updateFromDocument(
      RDocument* document, bool onlyChanges, RS::EntityType filter, bool manual, bool showOnRequest
    ) 
    
    {

      //qDebug() << "RPropertyEditor_Base::updateFromDocument()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("updateFromDocument");
      QJSValue f = self.property("updateFromDocument");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RDocument(
    handler, 
    // non-copyable: true
document
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
onlyChanges
  );


  args << RJSHelper_qcad::cpp2js_RS_EntityType(
    handler, 
    // non-copyable: false
filter
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
manual
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
showOnRequest
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.updateFromDocument();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.updateFromDocument.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling updateFromDocument:" << res.toString();
        //  engine->throwError("exception in: RPropertyEditor::updateFromDocument:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RPropertyEditor::updateFromDocument"));
      //}

      
          // call implementation of original class:
          return RPropertyEditor::updateFromDocument(
            document, onlyChanges, filter, manual, showOnRequest
          );
        
    }

  void RPropertyEditor_Base::updateFromDocumentNow(
      RDocument* document, bool onlyChanges, RS::EntityType filter, bool manual, bool showOnRequest
    ) 
    
    {

      //qDebug() << "RPropertyEditor_Base::updateFromDocumentNow()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("updateFromDocumentNow");
      QJSValue f = self.property("updateFromDocumentNow");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RDocument(
    handler, 
    // non-copyable: true
document
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
onlyChanges
  );


  args << RJSHelper_qcad::cpp2js_RS_EntityType(
    handler, 
    // non-copyable: false
filter
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
manual
  );


  args << RJSHelper::cpp2js_bool(
    handler, 
    // non-copyable: false
showOnRequest
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.updateFromDocumentNow();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.updateFromDocumentNow.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling updateFromDocumentNow:" << res.toString();
        //  engine->throwError("exception in: RPropertyEditor::updateFromDocumentNow:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RPropertyEditor::updateFromDocumentNow"));
      //}

      
          // call implementation of original class:
          return RPropertyEditor::updateFromDocumentNow(
            document, onlyChanges, filter, manual, showOnRequest
          );
        
    }

  void RPropertyEditor_Base::updateFromObject(
      RObject* object, RDocument* document
    ) 
    
    {

      //qDebug() << "RPropertyEditor_Base::updateFromObject()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("updateFromObject");
      QJSValue f = self.property("updateFromObject");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RObject(
    handler, 
    // non-copyable: true
object
  );


  args << RJSHelper_qcad::cpp2js_RDocument(
    handler, 
    // non-copyable: true
document
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.updateFromObject();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.updateFromObject.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling updateFromObject:" << res.toString();
        //  engine->throwError("exception in: RPropertyEditor::updateFromObject:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RPropertyEditor::updateFromObject"));
      //}

      
          // call implementation of original class:
          return RPropertyEditor::updateFromObject(
            object, document
          );
        
    }

  void RPropertyEditor_Base::clearEditor(
      
    ) 
    
    {

      //qDebug() << "RPropertyEditor_Base::clearEditor()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("clearEditor");
      QJSValue f = self.property("clearEditor");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.clearEditor();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.clearEditor.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling clearEditor:" << res.toString();
        //  engine->throwError("exception in: RPropertyEditor::clearEditor:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RPropertyEditor::clearEditor"));
      //}

      
          // call implementation of original class:
          return RPropertyEditor::clearEditor(
            
          );
        
    }

  

      // public pure-virtual functions:
      