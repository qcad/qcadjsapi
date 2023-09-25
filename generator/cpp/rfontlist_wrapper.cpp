
  // Auto generated
  
  // include header:
  //#include "RFontListwrapper.h"
  //#include "header_cpp.h"
  
    #include "rfontlist_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RFontList
    // Function: init
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFontList_WrapperSingleton::init
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RFontList::init(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for init";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFontList
    // Function: initSubstitutions
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFontList_WrapperSingleton::initSubstitutions
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RFontList::initSubstitutions(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initSubstitutions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFontList
    // Function: uninit
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFontList_WrapperSingleton::uninit
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RFontList::uninit(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for uninit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFontList
    // Function: getNames
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFontList_WrapperSingleton::getNames
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RFontList::getNames(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFontList
    // Function: getSubName
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFontList_WrapperSingleton::getSubName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: resName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RFontList::getSubName(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSubName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFontList
    // Function: get
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFontList_WrapperSingleton::get
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

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: resName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: substitute (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            RFont* res = 
                
                // call static member function:
                RFontList::get(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: RFont*

            return RJSHelper_qcad::cpp2js_RFont(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of RJSHelper_qcad::cpp2js_RFont:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for get";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFontList
    // Function: isCadFont
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFontList_WrapperSingleton::isCadFont
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
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fontName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: fontFile (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RFontList::isCadFont(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCadFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RFontList_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RFontList_Wrapper>("org.qcad", 1, 0, "RFontList_Wrapper");
        qmlRegisterInterface<RFontList_Wrapper>("RFontList_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RFontList* t = new RJSType_RFontList();
          global.setProperty("RJSType_RFontList", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RFontList::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RFontList_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RFontList_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RFontList_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RFontList_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RFontList_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RFontList_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RFontList_WrapperSingleton * s = new RFontList_WrapperSingleton(handler);
        engine->globalObject().setProperty("RFontList_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RFontList.js";
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
    RFontList_Wrapper::RFontList_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RFontList_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RFontList_Wrapper::RFontList_Wrapper(RJSApi& h, RFontList* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RFontList_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RFontList_Wrapper"));
              //setObjectName("RFontList_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RFontList_Wrapper::~RFontList_Wrapper() {
            //RDebug::decCounter(QString("RFontList_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RFontList_Wrapper"));

            //qDebug() << "RFontList_Wrapper::~RFontList_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RFontList";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RFontList_Wrapper::initConnections() {

          //setObjectName("RFontList_Wrapper");

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
  
    // Class: RFontList
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RFontList_Wrapper::RFontList_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RFontList_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RFontList_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RFontList(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RFontList";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  