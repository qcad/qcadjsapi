

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "rfileimporterfactoryadapter_base.h"
  //#include "RFileImporterFactoryAdapter_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for RFileImporterFactoryAdapter

    // constructors:
    
  // Class: RFileImporterFactoryAdapter
  // Function: 
  // Parameters: 0
  // preceding Parameters: -1

      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      QStringList RFileImporterFactoryAdapter_Base::getFilterStrings(
      
    ) 
    
    {

      //qDebug() << "RFileImporterFactoryAdapter_Base::getFilterStrings()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("getFilterStrings");
      QJSValue f = self.property("getFilterStrings");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.getFilterStrings();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.getFilterStrings.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling getFilterStrings:" << res.toString();
        //  engine->throwError("exception in: RFileImporterFactoryAdapter::getFilterStrings:" + res.toString());
        //}

        
            return RJSHelper::js2cpp_QStringList(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileImporterFactoryAdapter::getFilterStrings"));
      //}

      
          // call implementation of original class:
          return RFileImporterFactoryAdapter::getFilterStrings(
            
          );
        
    }

  int RFileImporterFactoryAdapter_Base::canImport(
      const QString& fileName, const QString& nameFilter
    ) 
    
    {

      //qDebug() << "RFileImporterFactoryAdapter_Base::canImport()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("canImport");
      QJSValue f = self.property("canImport");
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
        //engine->evaluate("__self__.canImport();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.canImport.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling canImport:" << res.toString();
        //  engine->throwError("exception in: RFileImporterFactoryAdapter::canImport:" + res.toString());
        //}

        
            return RJSHelper::js2cpp_int(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileImporterFactoryAdapter::canImport"));
      //}

      
          // call implementation of original class:
          return RFileImporterFactoryAdapter::canImport(
            fileName, nameFilter
          );
        
    }

  RFileImporter* RFileImporterFactoryAdapter_Base::instantiate(
      RDocument& document, RMessageHandler* messageHandler, RProgressHandler* progressHandler
    ) 
    
    {

      //qDebug() << "RFileImporterFactoryAdapter_Base::instantiate()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("instantiate");
      QJSValue f = self.property("instantiate");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper_qcad::cpp2js_RDocument(
    handler, 
    // non-copyable: true

        &document
  );


  args << RJSHelper_qcad::cpp2js_RMessageHandler(
    handler, 
    // non-copyable: true
messageHandler
  );


  args << RJSHelper_qcad::cpp2js_RProgressHandler(
    handler, 
    // non-copyable: true
progressHandler
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.instantiate();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.instantiate.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling instantiate:" << res.toString();
        //  engine->throwError("exception in: RFileImporterFactoryAdapter::instantiate:" + res.toString());
        //}

        
            return RJSHelper_qcad::js2cpp_RFileImporter_ptr(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileImporterFactoryAdapter::instantiate"));
      //}

      
          // call implementation of original class:
          return RFileImporterFactoryAdapter::instantiate(
            document, messageHandler, progressHandler
          );
        
    }

  

      // public pure-virtual functions:
      