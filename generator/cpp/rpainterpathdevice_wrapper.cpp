
  // Auto generated
  
  // include header:
  //#include "RPainterPathDevicewrapper.h"
  //#include "header_cpp.h"
  
    #include "rpainterpathdevice_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RPainterPathDevice*> RPainterPathDevice_Wrapper::basecasters_RPainterPathDevice;
    
    // static functions implementation in singleton wrapper:
    
    void RPainterPathDevice_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPainterPathDevice_Wrapper>("org.qcad", 1, 0, "RPainterPathDevice_Wrapper");
        qmlRegisterInterface<RPainterPathDevice_Wrapper>("RPainterPathDevice_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPainterPathDevice* t = new RJSType_RPainterPathDevice();
          global.setProperty("RJSType_RPainterPathDevice", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPainterPathDevice::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPainterPathDevice_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPainterPathDevice_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPainterPathDevice_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPainterPathDevice_BaseJs", mob);
      
      QString fileName = ":generator/js/RPainterPathDevice.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    RPainterPathDevice_Wrapper::RPainterPathDevice_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPainterPathDevice_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPainterPathDevice_Wrapper::RPainterPathDevice_Wrapper(RJSApi& h, RPainterPathDevice* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPainterPathDevice_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPainterPathDevice_Wrapper"));
              //setObjectName("RPainterPathDevice_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPainterPathDevice_Wrapper::~RPainterPathDevice_Wrapper() {
            //RDebug::decCounter(QString("RPainterPathDevice_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPainterPathDevice_Wrapper"));

            //qDebug() << "RPainterPathDevice_Wrapper::~RPainterPathDevice_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RPainterPathDevice";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPainterPathDevice_Wrapper::initConnections() {

          //setObjectName("RPainterPathDevice_Wrapper");

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
  
    // Class: RPainterPathDevice
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RPainterPathDevice_Wrapper::RPainterPathDevice_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RPainterPathDevice_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RPainterPathDevice_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
              wrapped = new RPainterPathDevice(
                  
              );
              wrappedCreated = true;
            

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RPainterPathDevice";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RPainterPathDevice
    // Function: devType
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::devType
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
                RPainterPathDevice* w = getWrapped();
                int res = 
                    
                w->devType(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for devType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: paintingActive
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::paintingActive
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
                RPainterPathDevice* w = getWrapped();
                bool res = 
                    
                w->paintingActive(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for paintingActive";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: width
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::width
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
                RPainterPathDevice* w = getWrapped();
                int res = 
                    
                w->width(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for width";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: height
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::height
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
                RPainterPathDevice* w = getWrapped();
                int res = 
                    
                w->height(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for height";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: widthMM
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::widthMM
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
                RPainterPathDevice* w = getWrapped();
                int res = 
                    
                w->widthMM(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for widthMM";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: heightMM
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::heightMM
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
                RPainterPathDevice* w = getWrapped();
                int res = 
                    
                w->heightMM(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for heightMM";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: logicalDpiX
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::logicalDpiX
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
                RPainterPathDevice* w = getWrapped();
                int res = 
                    
                w->logicalDpiX(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for logicalDpiX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: logicalDpiY
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::logicalDpiY
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
                RPainterPathDevice* w = getWrapped();
                int res = 
                    
                w->logicalDpiY(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for logicalDpiY";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: physicalDpiX
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::physicalDpiX
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
                RPainterPathDevice* w = getWrapped();
                int res = 
                    
                w->physicalDpiX(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for physicalDpiX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: physicalDpiY
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::physicalDpiY
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
                RPainterPathDevice* w = getWrapped();
                int res = 
                    
                w->physicalDpiY(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for physicalDpiY";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: devicePixelRatio
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::devicePixelRatio
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
                RPainterPathDevice* w = getWrapped();
                qreal res = 
                    
                w->devicePixelRatio(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for devicePixelRatio";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: devicePixelRatioF
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::devicePixelRatioF
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
                RPainterPathDevice* w = getWrapped();
                qreal res = 
                    
                w->devicePixelRatioF(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for devicePixelRatioF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: colorCount
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::colorCount
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
                RPainterPathDevice* w = getWrapped();
                int res = 
                    
                w->colorCount(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for colorCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: depth
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::depth
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
                RPainterPathDevice* w = getWrapped();
                int res = 
                    
                w->depth(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for depth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: setStrokePolygon
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::setStrokePolygon
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RPainterPathDevice* w = getWrapped();
                
                w->setStrokePolygon(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStrokePolygon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: getPainterPaths
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::getPainterPaths
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
                RPainterPathDevice* w = getWrapped();
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
            
    // Class: RPainterPathDevice
    // Function: setSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::setSize
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RPainterPathDevice* w = getWrapped();
                
                w->setSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPainterPathDevice
    // Function: setDpi
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPainterPathDevice_Wrapper::setDpi
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RPainterPathDevice* w = getWrapped();
                
                w->setDpi(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDpi";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rpainterpathdevice_wrapper.cpp"
  
