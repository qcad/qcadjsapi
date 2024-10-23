
  // Auto generated
  
  // include header:
  //#include "RFileImporterFactorywrapper.h"
  //#include "header_cpp.h"
  
    #include "rfileimporterfactory_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RFileImporterFactory*> RFileImporterFactory_Wrapper::basecasters_RFileImporterFactory;
    
    // static functions implementation in singleton wrapper:
    
    void RFileImporterFactory_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RFileImporterFactory_Wrapper>("org.qcad", 1, 0, "RFileImporterFactory_Wrapper");
        qmlRegisterInterface<RFileImporterFactory_Wrapper>("RFileImporterFactory_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RFileImporterFactory* t = new RJSType_RFileImporterFactory();
          global.setProperty("RJSType_RFileImporterFactory", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RFileImporterFactory::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RFileImporterFactory_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RFileImporterFactory_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RFileImporterFactory_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RFileImporterFactory_BaseJs", mob);
      
      QString fileName = ":generator/js/RFileImporterFactory.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      qDebug() << "Evaluating file: " << fileName;
      QJSValue result = engine->evaluate(contents, fileName);
      if (result.isError()) {
          qWarning()
              << "Uncaught exception at line"
              << result.property("lineNumber").toInt()
              << ":" << result.toString();
      }
    }
  
    /*
    // special constructor used as prototype:
    RFileImporterFactory_Wrapper::RFileImporterFactory_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RFileImporterFactory_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RFileImporterFactory_Wrapper::RFileImporterFactory_Wrapper(RJSApi& h, RFileImporterFactory* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RFileImporterFactory_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RFileImporterFactory_Wrapper"));
              //setObjectName("RFileImporterFactory_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RFileImporterFactory_Wrapper::~RFileImporterFactory_Wrapper() {
            //RDebug::decCounter(QString("RFileImporterFactory_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RFileImporterFactory_Wrapper"));

            //qDebug() << "RFileImporterFactory_Wrapper::~RFileImporterFactory_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RFileImporterFactory";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RFileImporterFactory_Wrapper::initConnections() {

          //setObjectName("RFileImporterFactory_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            

          if (hasWrapped()) {
            
            // set up signal forwarding:
            
          }
        }
      

  // constructors:
  

    // non-static functions:
    
    // Class: RFileImporterFactory
    // Function: getFilterStrings
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileImporterFactory_Wrapper::getFilterStrings
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileImporterFactory* w = getWrapped();
                QStringList res = 
                    
                w->getFilterStrings(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFilterStrings";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterFactory
    // Function: canImport
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileImporterFactory_Wrapper::canImport
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: nameFilter (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = "";
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileImporterFactory* w = getWrapped();
                int res = 
                    
                w->canImport(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for canImport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterFactory
    // Function: instantiate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileImporterFactory_Wrapper::instantiate
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // non copyable:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileImporterFactory* w = getWrapped();
                RFileImporter* res = 
                    
                w->instantiate(
                  *a1_cpp
    
                );
              
            // return type: RFileImporter*

            return RJSHelper_qcad::cpp2js_RFileImporter(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for instantiate";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rfileimporterfactory_wrapper.cpp"
  
