
  // Auto generated
  
  // include header:
  //#include "RFontwrapper.h"
  //#include "header_cpp.h"
  
    #include "rfont_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RFont*> RFont_Wrapper::basecasters_RFont;
    
    // static functions implementation in singleton wrapper:
    
    void RFont_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RFont_Wrapper>("org.qcad", 1, 0, "RFont_Wrapper");
        qmlRegisterInterface<RFont_Wrapper>("RFont_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RFont* t = new RJSType_RFont();
          global.setProperty("RJSType_RFont", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RFont::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RFont_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RFont_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RFont_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RFont_BaseJs", mob);
      
      QString fileName = ":generator/js/RFont.js";
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
    RFont_Wrapper::RFont_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RFont_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RFont_Wrapper::RFont_Wrapper(RJSApi& h, RFont* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RFont_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RFont_Wrapper"));
              //setObjectName("RFont_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RFont_Wrapper::~RFont_Wrapper() {
            //RDebug::decCounter(QString("RFont_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RFont_Wrapper"));

            //qDebug() << "RFont_Wrapper::~RFont_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RFont";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RFont_Wrapper::initConnections() {

          //setObjectName("RFont_Wrapper");

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
  
    // Class: RFont
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RFont_Wrapper::RFont_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RFont_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RFont_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RFont(
                a1_cpp
    
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

        
            wrapped = new RFont(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RFont";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RFont
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::isValid
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
                RFont* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFont
    // Function: getFileName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::getFileName
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
                RFont* w = getWrapped();
                QString res = 
                    
                w->getFileName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFileName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFont
    // Function: getEncoding
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::getEncoding
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
                RFont* w = getWrapped();
                QString res = 
                    
                w->getEncoding(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEncoding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFont
    // Function: getNames
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::getNames
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
                RFont* w = getWrapped();
                const QStringList res = 
                    
                w->getNames(
                  
                );
              
            // return type: const QStringList

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
            
    // Class: RFont
    // Function: getAuthors
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::getAuthors
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
                RFont* w = getWrapped();
                const QStringList res = 
                    
                w->getAuthors(
                  
                );
              
            // return type: const QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAuthors";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFont
    // Function: getLetterSpacing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::getLetterSpacing
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
                RFont* w = getWrapped();
                double res = 
                    
                w->getLetterSpacing(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLetterSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFont
    // Function: getWordSpacing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::getWordSpacing
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
                RFont* w = getWrapped();
                double res = 
                    
                w->getWordSpacing(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getWordSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFont
    // Function: getLineSpacingFactor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::getLineSpacingFactor
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
                RFont* w = getWrapped();
                double res = 
                    
                w->getLineSpacingFactor(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLineSpacingFactor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFont
    // Function: getAuxLinePositions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::getAuxLinePositions
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
                RFont* w = getWrapped();
                QList<double> res = 
                    
                w->getAuxLinePositions(
                  
                );
              
            // return type: QList<double>

            return RJSHelper::cpp2js_QList_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAuxLinePositions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFont
    // Function: getAuxLinePositionsString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::getAuxLinePositionsString
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
                RFont* w = getWrapped();
                QString res = 
                    
                w->getAuxLinePositionsString(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAuxLinePositionsString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFont
    // Function: load
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::load
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
                RFont* w = getWrapped();
                bool res = 
                    
                w->load(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for load";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFont
    // Function: isLoaded
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::isLoaded
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
                RFont* w = getWrapped();
                bool res = 
                    
                w->isLoaded(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLoaded";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFont
    // Function: getGlyphNames
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::getGlyphNames
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
                RFont* w = getWrapped();
                QList<QChar> res = 
                    
                w->getGlyphNames(
                  
                );
              
            // return type: QList<QChar>

            return RJSHelper::cpp2js_QList_QChar(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGlyphNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFont
    // Function: getGlyph
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::getGlyph
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QChar(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ch (QChar)
  
QChar a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QChar(handler, a1);
        
  // convert js parameter to cpp: draft (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
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
                RFont* w = getWrapped();
                RPainterPath res = 
                    
                w->getGlyph(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: RPainterPath

            return RJSHelper_qcad::cpp2js_RPainterPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGlyph";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFont
    // Function: getShapeNames
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::getShapeNames
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
                RFont* w = getWrapped();
                QList<QString> res = 
                    
                w->getShapeNames(
                  
                );
              
            // return type: QList<QString>

            return RJSHelper::cpp2js_QList_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getShapeNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFont
    // Function: getShape
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::getShape
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFont* w = getWrapped();
                RPainterPath res = 
                    
                w->getShape(
                  a1_cpp
    
                );
              
            // return type: RPainterPath

            return RJSHelper_qcad::cpp2js_RPainterPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFont
    // Function: getShapeName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFont_Wrapper::getShapeName
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QChar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ch (QChar)
  
QChar a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QChar(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFont* w = getWrapped();
                QString res = 
                    
                w->getShapeName(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getShapeName";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rfont_wrapper.cpp"
  
