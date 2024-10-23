
  // Auto generated
  
  // include header:
  //#include "RTextLayoutwrapper.h"
  //#include "header_cpp.h"
  
    #include "rtextlayout_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RTextLayout*> RTextLayout_Wrapper::basecasters_RTextLayout;
    
    // static functions implementation in singleton wrapper:
    
    void RTextLayout_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RTextLayout_Wrapper>("org.qcad", 1, 0, "RTextLayout_Wrapper");
        qmlRegisterInterface<RTextLayout_Wrapper>("RTextLayout_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RTextLayout* t = new RJSType_RTextLayout();
          global.setProperty("RJSType_RTextLayout", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RTextLayout::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RTextLayout_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RTextLayout_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RTextLayout_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RTextLayout_BaseJs", mob);
      
      QString fileName = ":generator/js/RTextLayout.js";
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
    RTextLayout_Wrapper::RTextLayout_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RTextLayout_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RTextLayout_Wrapper::RTextLayout_Wrapper(RJSApi& h, RTextLayout* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RTextLayout_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RTextLayout_Wrapper"));
              //setObjectName("RTextLayout_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          
        // special constructor to wrap existing object from shared pointer:
        RTextLayout_Wrapper::RTextLayout_Wrapper(RJSApi& h, QSharedPointer<RTextLayout> o) : RJSWrapperObj(h), wrapped(nullptr), spWrapped(o), wrappedCreated(false) {
              //RDebug::incCounter(QString("RTextLayout_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RTextLayout_Wrapper"));
              //setObjectName("RTextLayout_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RTextLayout_Wrapper::~RTextLayout_Wrapper() {
            //RDebug::decCounter(QString("RTextLayout_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RTextLayout_Wrapper"));

            //qDebug() << "RTextLayout_Wrapper::~RTextLayout_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RTextLayout";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RTextLayout_Wrapper::initConnections() {

          //setObjectName("RTextLayout_Wrapper");

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
  
    // Class: RTextLayout
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
RTextLayout_Wrapper::RTextLayout_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RTextLayout_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RTextLayout_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QSharedPointer_QTextLayout(handler, a1
  )

   && RJSHelper::is_QTransform(handler, a2
  )

   && RJSHelper::is_QColor(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layout (QSharedPointer<QTextLayout>)
  
QSharedPointer<QTextLayout> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSharedPointer_QTextLayout(handler, a1);
        
  // convert js parameter to cpp: transform (QTransform)
  
QTransform a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QTransform(handler, a2);
        
  // convert js parameter to cpp: color (QColor)
  
QColor a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QColor(handler, a3);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RTextLayout(
                a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_RPainterPath(handler, a1
  )

   && RJSHelper::is_QColor(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pps (QList<RPainterPath>)
  
QList<RPainterPath> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RPainterPath(handler, a1);
        
  // convert js parameter to cpp: color (QColor)
  
QColor a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QColor(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RTextLayout(
                a1_cpp
    , a2_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RTextLayout(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RTextLayout";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RTextLayout
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextLayout_Wrapper::isEmpty
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
                RTextLayout* w = getWrapped();
                bool res = 
                    
                w->isEmpty(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEmpty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextLayout
    // Function: isTTF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextLayout_Wrapper::isTTF
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
                RTextLayout* w = getWrapped();
                bool res = 
                    
                w->isTTF(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTTF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextLayout
    // Function: hasPainterPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextLayout_Wrapper::hasPainterPath
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
                RTextLayout* w = getWrapped();
                bool res = 
                    
                w->hasPainterPath(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasPainterPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextLayout
    // Function: getLayout
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextLayout_Wrapper::getLayout
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
                RTextLayout* w = getWrapped();
                QSharedPointer<QTextLayout> res = 
                    
                w->getLayout(
                  
                );
              
            // return type: QSharedPointer<QTextLayout>

            return RJSHelper::cpp2js_QSharedPointer_QTextLayout(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextLayout
    // Function: getTransform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextLayout_Wrapper::getTransform
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
                RTextLayout* w = getWrapped();
                QTransform res = 
                    
                w->getTransform(
                  
                );
              
            // return type: QTransform

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextLayout
    // Function: getColor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextLayout_Wrapper::getColor
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
                RTextLayout* w = getWrapped();
                QColor res = 
                    
                w->getColor(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextLayout
    // Function: getText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextLayout_Wrapper::getText
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
                RTextLayout* w = getWrapped();
                QString res = 
                    
                w->getText(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextLayout
    // Function: getFont
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextLayout_Wrapper::getFont
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
                RTextLayout* w = getWrapped();
                QString res = 
                    
                w->getFont(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextLayout
    // Function: isBold
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextLayout_Wrapper::isBold
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
                RTextLayout* w = getWrapped();
                bool res = 
                    
                w->isBold(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextLayout
    // Function: isItalic
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextLayout_Wrapper::isItalic
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
                RTextLayout* w = getWrapped();
                bool res = 
                    
                w->isItalic(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isItalic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextLayout
    // Function: isUnderline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextLayout_Wrapper::isUnderline
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
                RTextLayout* w = getWrapped();
                bool res = 
                    
                w->isUnderline(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isUnderline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextLayout
    // Function: getHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextLayout_Wrapper::getHeight
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
                RTextLayout* w = getWrapped();
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
            
    // Class: RTextLayout
    // Function: getBoundingBox
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextLayout_Wrapper::getBoundingBox
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
                RTextLayout* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rtextlayout_wrapper.cpp"
  
