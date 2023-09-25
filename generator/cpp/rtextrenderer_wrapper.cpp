
  // Auto generated
  
  // include header:
  //#include "RTextRendererwrapper.h"
  //#include "header_cpp.h"
  
    #include "rtextrenderer_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RTextRenderer
    // Function: lockForDrawing
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextRenderer_WrapperSingleton::lockForDrawing
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RTextRenderer::lockForDrawing(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for lockForDrawing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextRenderer
    // Function: unlockForDrawing
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextRenderer_WrapperSingleton::unlockForDrawing
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RTextRenderer::unlockForDrawing(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unlockForDrawing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RTextRenderer_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RTextRenderer_Wrapper>("org.qcad", 1, 0, "RTextRenderer_Wrapper");
        qmlRegisterInterface<RTextRenderer_Wrapper>("RTextRenderer_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RTextRenderer* t = new RJSType_RTextRenderer();
          global.setProperty("RJSType_RTextRenderer", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RTextRenderer::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RTextRenderer_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RTextRenderer_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RTextRenderer_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RTextRenderer_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RTextRenderer_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RTextRenderer_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RTextRenderer_WrapperSingleton * s = new RTextRenderer_WrapperSingleton(handler);
        engine->globalObject().setProperty("RTextRenderer_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RTextRenderer.js";
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
    RTextRenderer_Wrapper::RTextRenderer_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RTextRenderer_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RTextRenderer_Wrapper::RTextRenderer_Wrapper(RJSApi& h, RTextRenderer* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RTextRenderer_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RTextRenderer_Wrapper"));
              //setObjectName("RTextRenderer_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RTextRenderer_Wrapper::~RTextRenderer_Wrapper() {
            //RDebug::decCounter(QString("RTextRenderer_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RTextRenderer_Wrapper"));

            //qDebug() << "RTextRenderer_Wrapper::~RTextRenderer_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RTextRenderer";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RTextRenderer_Wrapper::initConnections() {

          //setObjectName("RTextRenderer_Wrapper");

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
  
    // Class: RTextRenderer
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
RTextRenderer_Wrapper::RTextRenderer_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RTextRenderer_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RTextRenderer_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTextBasedData(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

   && RJSHelper_qcad::is_RTextRenderer_Target(handler, a3
  )

   && RJSHelper::is_double(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: textData (RTextBasedData)
  
RTextBasedData a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTextBasedData(handler, a1);
        
  // convert js parameter to cpp: draft (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        
  // convert js parameter to cpp: target (RTextRenderer::Target)
  
RTextRenderer::Target a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RTextRenderer_Target(handler, a3);
        
  // convert js parameter to cpp: fontHeightFactor (double)
  
double a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1.0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_double(handler, a4);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RTextRenderer(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

                    // no constructor without arguments defined
                    // allow constructor for prototype objects without args:
                    if (
                      a1.isUndefined()
   && a2.isUndefined()
   && a3.isUndefined()
   && a4.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RTextRenderer";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RTextRenderer
    // Function: renderSimple
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextRenderer_Wrapper::renderSimple
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
                RTextRenderer* w = getWrapped();
                
                w->renderSimple(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for renderSimple";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextRenderer
    // Function: render
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextRenderer_Wrapper::render
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
                RTextRenderer* w = getWrapped();
                
                w->render(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for render";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextRenderer
    // Function: getPainterPaths
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextRenderer_Wrapper::getPainterPaths
              (
                
              ) 
              
                const
              
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
                RTextRenderer* w = getWrapped();
                QList<RPainterPath> res = 
                    
                w->getPainterPaths(
                  
                );
              
            // return type: QList<RPainterPath>

            return RJSHelper_qcad::cpp2js_QList_RPainterPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPainterPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextRenderer
    // Function: getTextLayouts
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextRenderer_Wrapper::getTextLayouts
              (
                
              ) 
              
                const
              
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
                RTextRenderer* w = getWrapped();
                QList<RTextLayout> res = 
                    
                w->getTextLayouts(
                  
                );
              
            // return type: QList<RTextLayout>

            return RJSHelper_qcad::cpp2js_QList_RTextLayout(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTextLayouts";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextRenderer
    // Function: getBoundingBox
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextRenderer_Wrapper::getBoundingBox
              (
                
              ) 
              
                const
              
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
                RTextRenderer* w = getWrapped();
                RBox res = 
                    
                w->getBoundingBox(
                  
                );
              
            // return type: RBox

            return RJSHelper_qcad::cpp2js_RBox(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBoundingBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextRenderer
    // Function: getHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextRenderer_Wrapper::getHeight
              (
                
              ) 
              
                const
              
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
                RTextRenderer* w = getWrapped();
                double res = 
                    
                w->getHeight(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextRenderer
    // Function: getWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextRenderer_Wrapper::getWidth
              (
                
              ) 
              
                const
              
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
                RTextRenderer* w = getWrapped();
                double res = 
                    
                w->getWidth(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextRenderer
    // Function: getRichText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextRenderer_Wrapper::getRichText
              (
                
              ) 
              
                const
              
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
                RTextRenderer* w = getWrapped();
                QString res = 
                    
                w->getRichText(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getRichText";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  