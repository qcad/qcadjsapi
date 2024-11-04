

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "rfileimporteradapter_base.h"
  //#include "RFileImporterAdapter_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for RFileImporterAdapter

    // constructors:
    
  // Class: RFileImporterAdapter
  // Function: 
  // Parameters: 3
  // preceding Parameters: -1

  // Class: RFileImporterAdapter
  // Function: 
  // Parameters: 0
  // preceding Parameters: 3

      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      bool RFileImporterAdapter_Base::importFile(
      const QString& fileName, const QString& nameFilter, const QVariantMap& params
    ) 
    
    {

      //qDebug() << "RFileImporterAdapter_Base::importFile()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("importFile");
      QJSValue f = self.property("importFile");
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


  args << RJSHelper::cpp2js_QVariantMap(
    handler, 
    // non-copyable: false
params
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.importFile();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.importFile.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling importFile:" << res.toString();
        //  engine->throwError("exception in: RFileImporterAdapter::importFile:" + res.toString());
        //}

        
            return RJSHelper::js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: RFileImporterAdapter::importFile"));
      //}

      
          // call implementation of original class:
          return RFileImporterAdapter::importFile(
            fileName, nameFilter, params
          );
        
    }

  

      // public pure-virtual functions:
      