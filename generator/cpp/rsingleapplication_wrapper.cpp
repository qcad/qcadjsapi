
  // Auto generated
  
  // include header:
  //#include "RSingleApplicationwrapper.h"
  //#include "header_cpp.h"
  
    #include "rsingleapplication_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RSingleApplication*> RSingleApplication_Wrapper::basecasters_RSingleApplication;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RSingleApplication
    // Function: tr
    // Source: QObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::tr
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_char_ptr(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sourceText (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp:  (char)
  

      // char pointer string:
      QByteArray a2_ba = RJSHelper::js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    
  // convert js parameter to cpp:  (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = -1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QObject::tr(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tr";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: arguments
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::arguments
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QCoreApplication::arguments(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for arguments";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setAttribute
    // Source: QCoreApplication
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setAttribute
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_ApplicationAttribute(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: attribute (Qt::ApplicationAttribute)
  
Qt::ApplicationAttribute a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_ApplicationAttribute(handler, a1);
        
  // convert js parameter to cpp: on (bool)
  
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
            
                // call static member function:
                QCoreApplication::setAttribute(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAttribute";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: testAttribute
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::testAttribute
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_ApplicationAttribute(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: attribute (Qt::ApplicationAttribute)
  
Qt::ApplicationAttribute a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_ApplicationAttribute(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QCoreApplication::testAttribute(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for testAttribute";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setSetuidAllowed
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setSetuidAllowed
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
    
  // convert js parameter to cpp: allow (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::setSetuidAllowed(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSetuidAllowed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: isSetuidAllowed
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::isSetuidAllowed
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QCoreApplication::isSetuidAllowed(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSetuidAllowed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: instance
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::instance
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QCoreApplication* res = 
                
                // call static member function:
                QCoreApplication::instance(
              
            );
          
            // return type: QCoreApplication*

            return RJSHelper::cpp2js_QCoreApplication(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for instance";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: processEvents
    // Source: QCoreApplication
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::processEvents
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QEventLoop_ProcessEventsFlags(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flags (QEventLoop::ProcessEventsFlags)
  
QEventLoop::ProcessEventsFlags a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEventLoop_ProcessEventsFlags(handler, a1);
        
  // convert js parameter to cpp: maxtime (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::processEvents(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QEventLoop_ProcessEventsFlags(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flags (QEventLoop::ProcessEventsFlags)
  
QEventLoop::ProcessEventsFlags a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QEventLoop::AllEvents;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QEventLoop_ProcessEventsFlags(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::processEvents(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for processEvents";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: exit
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::exit
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: retcode (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 0;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::exit(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: sendEvent
    // Source: QCoreApplication
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::sendEvent
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QEvent_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: receiver (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        
  // convert js parameter to cpp: event (QEvent)
  

          // pointer:
          QEvent*
         a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QEvent_ptr(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QCoreApplication::sendEvent(
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

                  qWarning() << "no matching function variant found for sendEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: postEvent
    // Source: QCoreApplication
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::postEvent
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QEvent_ptr(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: receiver (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        
  // convert js parameter to cpp: event (QEvent)
  

          // pointer:
          QEvent*
         a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QEvent_ptr(handler, a2);
        
  // convert js parameter to cpp: priority (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::NormalEventPriority;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::postEvent(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for postEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: sendPostedEvents
    // Source: QCoreApplication
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::sendPostedEvents
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: receiver (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = nullptr;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
          }
        
  // convert js parameter to cpp: event_type (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::sendPostedEvents(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for sendPostedEvents";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: removePostedEvents
    // Source: QCoreApplication
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::removePostedEvents
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: receiver (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        
  // convert js parameter to cpp: eventType (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::removePostedEvents(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removePostedEvents";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: startingUp
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::startingUp
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QCoreApplication::startingUp(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startingUp";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: closingDown
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::closingDown
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QCoreApplication::closingDown(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for closingDown";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: applicationDirPath
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::applicationDirPath
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QCoreApplication::applicationDirPath(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationDirPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: applicationFilePath
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::applicationFilePath
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QCoreApplication::applicationFilePath(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationFilePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: applicationPid
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::applicationPid
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            qint64 res = 
                
                // call static member function:
                QCoreApplication::applicationPid(
              
            );
          
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationPid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setLibraryPaths
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setLibraryPaths
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::setLibraryPaths(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLibraryPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: libraryPaths
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::libraryPaths
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QCoreApplication::libraryPaths(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for libraryPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: addLibraryPath
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::addLibraryPath
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
    
  // convert js parameter to cpp:  (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::addLibraryPath(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addLibraryPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: removeLibraryPath
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::removeLibraryPath
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
    
  // convert js parameter to cpp:  (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::removeLibraryPath(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeLibraryPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: installTranslator
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::installTranslator
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTranslator_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: messageFile (QTranslator)
  

          // pointer:
          QTranslator*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTranslator_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QCoreApplication::installTranslator(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for installTranslator";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: removeTranslator
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::removeTranslator
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTranslator_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: messageFile (QTranslator)
  

          // pointer:
          QTranslator*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTranslator_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QCoreApplication::removeTranslator(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for removeTranslator";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: quit
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::quit
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::quit(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for quit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setApplicationDisplayName
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setApplicationDisplayName
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
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QGuiApplication::setApplicationDisplayName(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setApplicationDisplayName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: applicationDisplayName
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::applicationDisplayName
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QGuiApplication::applicationDisplayName(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationDisplayName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setDesktopFileName
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setDesktopFileName
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
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QGuiApplication::setDesktopFileName(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDesktopFileName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: desktopFileName
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::desktopFileName
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QGuiApplication::desktopFileName(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for desktopFileName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setWindowIcon
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setWindowIcon
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QIcon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: icon (QIcon)
  
QIcon a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QIcon(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QGuiApplication::setWindowIcon(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWindowIcon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: windowIcon
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::windowIcon
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QIcon res = 
                
                // call static member function:
                QGuiApplication::windowIcon(
              
            );
          
            // return type: QIcon

            return RJSHelper::cpp2js_QIcon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowIcon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: platformName
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::platformName
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QGuiApplication::platformName(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for platformName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: focusObject
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::focusObject
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QObject* res = 
                
                // call static member function:
                QGuiApplication::focusObject(
              
            );
          
            // return type: QObject*

            return RJSHelper::cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for focusObject";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: primaryScreen
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::primaryScreen
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QScreen* res = 
                
                // call static member function:
                QGuiApplication::primaryScreen(
              
            );
          
            // return type: QScreen*

            return RJSHelper::cpp2js_QScreen(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for primaryScreen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: screens
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::screens
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QScreen*> res = 
                
                // call static member function:
                QGuiApplication::screens(
              
            );
          
            // return type: QList<QScreen*>

            return RJSHelper::cpp2js_QList_QScreen_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for screens";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: screenAt
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::screenAt
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QScreen* res = 
                
                // call static member function:
                QGuiApplication::screenAt(
              a1_cpp
    
            );
          
            // return type: QScreen*

            return RJSHelper::cpp2js_QScreen(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for screenAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: overrideCursor
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::overrideCursor
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QCursor* res = 
                
                // call static member function:
                QGuiApplication::overrideCursor(
              
            );
          
            // return type: QCursor*

            return RJSHelper::cpp2js_QCursor(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of RJSHelper::cpp2js_QCursor:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for overrideCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setOverrideCursor
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setOverrideCursor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QCursor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QCursor)
  
QCursor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QCursor(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QGuiApplication::setOverrideCursor(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOverrideCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: changeOverrideCursor
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::changeOverrideCursor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QCursor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QCursor)
  
QCursor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QCursor(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QGuiApplication::changeOverrideCursor(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for changeOverrideCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: restoreOverrideCursor
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::restoreOverrideCursor
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QGuiApplication::restoreOverrideCursor(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for restoreOverrideCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: clipboard
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::clipboard
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QClipboard* res = 
                
                // call static member function:
                QGuiApplication::clipboard(
              
            );
          
            // return type: QClipboard*

            return RJSHelper::cpp2js_QClipboard(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of RJSHelper::cpp2js_QClipboard:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clipboard";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: keyboardModifiers
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::keyboardModifiers
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            Qt::KeyboardModifiers res = 
                
                // call static member function:
                QGuiApplication::keyboardModifiers(
              
            );
          
            // return type: Qt::KeyboardModifiers

            return RJSHelper::cpp2js_Qt_KeyboardModifiers(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for keyboardModifiers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: queryKeyboardModifiers
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::queryKeyboardModifiers
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            Qt::KeyboardModifiers res = 
                
                // call static member function:
                QGuiApplication::queryKeyboardModifiers(
              
            );
          
            // return type: Qt::KeyboardModifiers

            return RJSHelper::cpp2js_Qt_KeyboardModifiers(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryKeyboardModifiers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: mouseButtons
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::mouseButtons
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            Qt::MouseButtons res = 
                
                // call static member function:
                QGuiApplication::mouseButtons(
              
            );
          
            // return type: Qt::MouseButtons

            return RJSHelper::cpp2js_Qt_MouseButtons(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mouseButtons";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setLayoutDirection
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setLayoutDirection
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_LayoutDirection(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: direction (Qt::LayoutDirection)
  
Qt::LayoutDirection a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_LayoutDirection(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QGuiApplication::setLayoutDirection(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: layoutDirection
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::layoutDirection
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            Qt::LayoutDirection res = 
                
                // call static member function:
                QGuiApplication::layoutDirection(
              
            );
          
            // return type: Qt::LayoutDirection

            return RJSHelper::cpp2js_Qt_LayoutDirection(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for layoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: isRightToLeft
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::isRightToLeft
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QGuiApplication::isRightToLeft(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRightToLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: isLeftToRight
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::isLeftToRight
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QGuiApplication::isLeftToRight(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLeftToRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setDesktopSettingsAware
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setDesktopSettingsAware
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
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QGuiApplication::setDesktopSettingsAware(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDesktopSettingsAware";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: desktopSettingsAware
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::desktopSettingsAware
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QGuiApplication::desktopSettingsAware(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for desktopSettingsAware";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setQuitOnLastWindowClosed
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setQuitOnLastWindowClosed
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
    
  // convert js parameter to cpp: quit (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QGuiApplication::setQuitOnLastWindowClosed(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setQuitOnLastWindowClosed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: quitOnLastWindowClosed
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::quitOnLastWindowClosed
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QGuiApplication::quitOnLastWindowClosed(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for quitOnLastWindowClosed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: applicationState
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::applicationState
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            Qt::ApplicationState res = 
                
                // call static member function:
                QGuiApplication::applicationState(
              
            );
          
            // return type: Qt::ApplicationState

            return RJSHelper::cpp2js_Qt_ApplicationState(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: sync
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::sync
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QGuiApplication::sync(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for sync";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: palette
    // Source: QApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::palette
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QPalette res = 
                
                // call static member function:
                QApplication::palette(
              a1_cpp
    
            );
          
            // return type: QPalette

            return RJSHelper::cpp2js_QPalette(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: className (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

    // call function:
    
            // static member function:
            // call base class static function:
            QPalette res = 
                
                // call static member function:
                QApplication::palette(
              a1_cpp
    
            );
          
            // return type: QPalette

            return RJSHelper::cpp2js_QPalette(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for palette";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setPalette
    // Source: QApplication
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setPalette
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPalette(handler, a1
  )

   && RJSHelper::is_char_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPalette)
  
QPalette a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette(handler, a1);
        
  // convert js parameter to cpp: className (char)
  

      // char pointer string:
      QByteArray a2_ba = RJSHelper::js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setPalette(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPalette";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: font
    // Source: QApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::font
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QFont res = 
                
                // call static member function:
                QApplication::font(
              a1_cpp
    
            );
          
            // return type: QFont

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: className (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

    // call function:
    
            // static member function:
            // call base class static function:
            QFont res = 
                
                // call static member function:
                QApplication::font(
              a1_cpp
    
            );
          
            // return type: QFont

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QFont res = 
                
                // call static member function:
                QApplication::font(
              
            );
          
            // return type: QFont

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for font";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setFont
    // Source: QApplication
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setFont
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont(handler, a1
  )

   && RJSHelper::is_char_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFont)
  
QFont a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont(handler, a1);
        
  // convert js parameter to cpp: className (char)
  

      // char pointer string:
      QByteArray a2_ba = RJSHelper::js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setFont(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: topLevelWidgets
    // Source: QApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::topLevelWidgets
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QWidgetList res = 
                
                // call static member function:
                QApplication::topLevelWidgets(
              
            );
          
            // return type: QWidgetList

            return RJSHelper::cpp2js_QWidgetList_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topLevelWidgets";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: activePopupWidget
    // Source: QApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::activePopupWidget
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::activePopupWidget(
              
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for activePopupWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: activeModalWidget
    // Source: QApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::activeModalWidget
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::activeModalWidget(
              
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for activeModalWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: focusWidget
    // Source: QApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::focusWidget
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::focusWidget(
              
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for focusWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: activeWindow
    // Source: QApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::activeWindow
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::activeWindow(
              
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for activeWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: widgetAt
    // Source: QApplication
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::widgetAt
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::widgetAt(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  &&
    a2.isUndefined()

    
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::widgetAt(
              a1_cpp
    
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for widgetAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: topLevelAt
    // Source: QApplication
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::topLevelAt
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::topLevelAt(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  &&
    a2.isUndefined()

    
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::topLevelAt(
              a1_cpp
    
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topLevelAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: beep
    // Source: QApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::beep
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::beep(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for beep";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: alert
    // Source: QApplication
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::alert
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: widget (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        
  // convert js parameter to cpp: duration (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::alert(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for alert";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setCursorFlashTime
    // Source: QApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setCursorFlashTime
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setCursorFlashTime(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCursorFlashTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: cursorFlashTime
    // Source: QApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::cursorFlashTime
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QApplication::cursorFlashTime(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cursorFlashTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setDoubleClickInterval
    // Source: QApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setDoubleClickInterval
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setDoubleClickInterval(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDoubleClickInterval";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: doubleClickInterval
    // Source: QApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::doubleClickInterval
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QApplication::doubleClickInterval(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for doubleClickInterval";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setKeyboardInputInterval
    // Source: QApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setKeyboardInputInterval
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setKeyboardInputInterval(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setKeyboardInputInterval";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: keyboardInputInterval
    // Source: QApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::keyboardInputInterval
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QApplication::keyboardInputInterval(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for keyboardInputInterval";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setWheelScrollLines
    // Source: QApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setWheelScrollLines
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setWheelScrollLines(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWheelScrollLines";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: wheelScrollLines
    // Source: QApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::wheelScrollLines
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QApplication::wheelScrollLines(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for wheelScrollLines";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setStartDragTime
    // Source: QApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setStartDragTime
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ms (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setStartDragTime(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStartDragTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: startDragTime
    // Source: QApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::startDragTime
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QApplication::startDragTime(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startDragTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setStartDragDistance
    // Source: QApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::setStartDragDistance
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setStartDragDistance(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStartDragDistance";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: startDragDistance
    // Source: QApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::startDragDistance
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QApplication::startDragDistance(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startDragDistance";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: exec
    // Source: QApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::exec
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QApplication::exec(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exec";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: closeAllWindows
    // Source: QApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::closeAllWindows
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::closeAllWindows(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for closeAllWindows";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: aboutQt
    // Source: QApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::aboutQt
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::aboutQt(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for aboutQt";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if defined(Q_OS_X11)

#endif

    // Class: RSingleApplication
    // Function: getInstance
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::getInstance
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RSingleApplication* res = 
                
                // call static member function:
                RSingleApplication::getInstance(
              
            );
          
            // return type: RSingleApplication*

            return RJSHelper_qcad::cpp2js_RSingleApplication(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getInstance";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RSingleApplication_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RSingleApplication_Wrapper>("org.qcad", 1, 0, "RSingleApplication_Wrapper");
        qmlRegisterInterface<RSingleApplication_Wrapper>("RSingleApplication_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RSingleApplication* t = new RJSType_RSingleApplication();
          global.setProperty("RJSType_RSingleApplication", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RSingleApplication::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RSingleApplication_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RSingleApplication_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RSingleApplication_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RSingleApplication_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RSingleApplication_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RSingleApplication_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RSingleApplication_WrapperSingleton * s = new RSingleApplication_WrapperSingleton(handler);
        engine->globalObject().setProperty("RSingleApplication_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RSingleApplication.js";
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
    RSingleApplication_Wrapper::RSingleApplication_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RSingleApplication_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RSingleApplication_Wrapper::RSingleApplication_Wrapper(RJSApi& h, RSingleApplication* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RSingleApplication_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RSingleApplication_Wrapper"));
              //setObjectName("RSingleApplication_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RSingleApplication_Wrapper::~RSingleApplication_Wrapper() {
            //RDebug::decCounter(QString("RSingleApplication_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RSingleApplication_Wrapper"));

            //qDebug() << "RSingleApplication_Wrapper::~RSingleApplication_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RSingleApplication";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RSingleApplication_Wrapper::initConnections() {

          //setObjectName("RSingleApplication_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is a QObject and not a wrapper for a null pointer:
              // wrapper is managed by the QObject as child:
              if (hasWrapped()) {
                QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
              }
            

          if (hasWrapped()) {
            
                // set parent of wrapper to wrapped:
                // wrapper can be looked up for object:
                QVariant vThis = QVariant::fromValue(this);
                getWrapped()->setProperty("__wrapper__",  vThis);

                // make sure wrapper is deleted when object is deleted:
                // make sure wrapper stays alive as long as the wrapped stays alive::
                QObject::setParent(getWrapped());
              
            // set up signal forwarding:
            
  connect(
    getWrapped(), 
    SIGNAL(organizationNameChanged()), 
    this, 
    SLOT(organizationNameChangedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(organizationDomainChanged()), 
    this, 
    SLOT(organizationDomainChangedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(applicationNameChanged()), 
    this, 
    SLOT(applicationNameChangedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(applicationVersionChanged()), 
    this, 
    SLOT(applicationVersionChangedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(fontDatabaseChanged()), 
    this, 
    SLOT(fontDatabaseChangedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(screenAdded(QScreen*)), 
    this, 
    SLOT(screenAddedEmitter(QScreen*))
  );

  connect(
    getWrapped(), 
    SIGNAL(screenRemoved(QScreen*)), 
    this, 
    SLOT(screenRemovedEmitter(QScreen*))
  );

  connect(
    getWrapped(), 
    SIGNAL(primaryScreenChanged(QScreen*)), 
    this, 
    SLOT(primaryScreenChangedEmitter(QScreen*))
  );

  connect(
    getWrapped(), 
    SIGNAL(lastWindowClosed()), 
    this, 
    SLOT(lastWindowClosedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(focusObjectChanged(QObject*)), 
    this, 
    SLOT(focusObjectChangedEmitter(QObject*))
  );

  connect(
    getWrapped(), 
    SIGNAL(applicationStateChanged(Qt::ApplicationState)), 
    this, 
    SLOT(applicationStateChangedEmitter(Qt::ApplicationState))
  );

  connect(
    getWrapped(), 
    SIGNAL(layoutDirectionChanged(Qt::LayoutDirection)), 
    this, 
    SLOT(layoutDirectionChangedEmitter(Qt::LayoutDirection))
  );

  connect(
    getWrapped(), 
    SIGNAL(applicationDisplayNameChanged()), 
    this, 
    SLOT(applicationDisplayNameChangedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(paletteChanged(const QPalette&)), 
    this, 
    SLOT(paletteChangedEmitter(const QPalette&))
  );

  connect(
    getWrapped(), 
    SIGNAL(fontChanged(const QFont&)), 
    this, 
    SLOT(fontChangedEmitter(const QFont&))
  );

  connect(
    getWrapped(), 
    SIGNAL(focusChanged(QWidget*, QWidget*)), 
    this, 
    SLOT(focusChangedEmitter(QWidget*, QWidget*))
  );

  connect(
    getWrapped(), 
    SIGNAL(messageReceived(const QString&)), 
    this, 
    SLOT(messageReceivedEmitter(const QString&))
  );

  connect(
    getWrapped(), 
    SIGNAL(fileOpenRequestReceived(const QString&)), 
    this, 
    SLOT(fileOpenRequestReceivedEmitter(const QString&))
  );

              /*
              connect(
                getWrapped(),
                SIGNAL(destroyed(QObject*)),
                &handler,
                SLOT(slotDestroyed(QObject*))
              );
              */
            
          }
        }
      

  // constructors:
  
#if defined(Q_OS_X11)

#endif


    // non-static functions:
    
    // Class: RSingleApplication
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::objectName
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                QString res = 
                    
                w->objectName(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::setObjectName
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
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->setObjectName(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::isWidgetType
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                bool res = 
                    
                w->isWidgetType(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWidgetType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::isWindowType
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                bool res = 
                    
                w->isWindowType(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWindowType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::signalsBlocked
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                bool res = 
                    
                w->signalsBlocked(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for signalsBlocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::blockSignals
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
    
  // convert js parameter to cpp: b (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                bool res = 
                    
                w->blockSignals(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blockSignals";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::findChild
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
        RJSHelper::is_QString(handler, a1
    , true
  
  )

   && RJSHelper::is_Qt_FindChildOptions(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: aName (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QString();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
          }
        
  // convert js parameter to cpp: options (Qt::FindChildOptions)
  
Qt::FindChildOptions a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::FindChildrenRecursively;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_FindChildOptions(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                QObject* res = 
                    
                w->findChild<QObject*>(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QObject*

            return RJSHelper::cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for findChild";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::children
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QObjectList* res =
                    &
                w->children(
                  
                );
              
                //setRecFlag(false);
              
            // return type: const QObjectList&

            return RJSHelper::cpp2js_QObjectList(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for children";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setParent
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::setParent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->setParent(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::installEventFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: filterObj (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->installEventFilter(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for installEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::removeEventFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: obj (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->removeEventFilter(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::dumpObjectTree
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectTree";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::dumpObjectInfo
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::setProperty
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                bool res = 
                    
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::property
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                QVariant res = 
                    
                w->property(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for property";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::dynamicPropertyNames
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                QList<QByteArray> res = 
                    
                w->dynamicPropertyNames(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QList<QByteArray>

            return RJSHelper::cpp2js_QList_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dynamicPropertyNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: parent
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::parent
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                QObject* res = 
                    
                w->parent(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QObject*

            return RJSHelper::cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::deleteLater
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->deleteLater(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteLater";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setOrganizationDomain
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::setOrganizationDomain
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
    
  // convert js parameter to cpp: orgDomain (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->setOrganizationDomain(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOrganizationDomain";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: organizationDomain
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::organizationDomain
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                QString res = 
                    
                w->organizationDomain(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for organizationDomain";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setOrganizationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::setOrganizationName
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
    
  // convert js parameter to cpp: orgName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->setOrganizationName(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOrganizationName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: organizationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::organizationName
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                QString res = 
                    
                w->organizationName(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for organizationName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setApplicationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::setApplicationName
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
    
  // convert js parameter to cpp: application (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->setApplicationName(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setApplicationName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: applicationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::applicationName
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                QString res = 
                    
                w->applicationName(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setApplicationVersion
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::setApplicationVersion
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
    
  // convert js parameter to cpp: version (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->setApplicationVersion(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setApplicationVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: applicationVersion
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::applicationVersion
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                QString res = 
                    
                w->applicationVersion(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: isQuitLockEnabled
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::isQuitLockEnabled
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                bool res = 
                    
                w->isQuitLockEnabled(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isQuitLockEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setQuitLockEnabled
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::setQuitLockEnabled
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
    
  // convert js parameter to cpp: enabled (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->setQuitLockEnabled(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setQuitLockEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: organizationNameChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::organizationNameChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit organizationNameChanged(
                  
                );
              }
            
    // Class: RSingleApplication
    // Function: organizationDomainChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::organizationDomainChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit organizationDomainChanged(
                  
                );
              }
            
    // Class: RSingleApplication
    // Function: applicationNameChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::applicationNameChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit applicationNameChanged(
                  
                );
              }
            
    // Class: RSingleApplication
    // Function: applicationVersionChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::applicationVersionChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit applicationVersionChanged(
                  
                );
              }
            
    // Class: RSingleApplication
    // Function: devicePixelRatio
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::devicePixelRatio
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                qreal res = 
                    
                w->devicePixelRatio(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: RSingleApplication
    // Function: isSessionRestored
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::isSessionRestored
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                bool res = 
                    
                w->isSessionRestored(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSessionRestored";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: sessionId
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::sessionId
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                QString res = 
                    
                w->sessionId(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sessionId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: sessionKey
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::sessionKey
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                QString res = 
                    
                w->sessionKey(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sessionKey";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: isSavingSession
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::isSavingSession
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                bool res = 
                    
                w->isSavingSession(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSavingSession";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: fontDatabaseChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::fontDatabaseChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit fontDatabaseChanged(
                  
                );
              }
            
    // Class: RSingleApplication
    // Function: screenAdded
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::screenAddedEmitter(
                QScreen* screen
              ) {
                // convert cpp parameters to js:
                
  // parameter: screen (QScreen)
  


  QJSValue a1_js = RJSHelper::cpp2js_QScreen(
    handler, 
    screen
  );


                emit screenAdded(
                  a1_js
                );
              }
            
    // Class: RSingleApplication
    // Function: screenRemoved
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::screenRemovedEmitter(
                QScreen* screen
              ) {
                // convert cpp parameters to js:
                
  // parameter: screen (QScreen)
  


  QJSValue a1_js = RJSHelper::cpp2js_QScreen(
    handler, 
    screen
  );


                emit screenRemoved(
                  a1_js
                );
              }
            
    // Class: RSingleApplication
    // Function: primaryScreenChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::primaryScreenChangedEmitter(
                QScreen* screen
              ) {
                // convert cpp parameters to js:
                
  // parameter: screen (QScreen)
  


  QJSValue a1_js = RJSHelper::cpp2js_QScreen(
    handler, 
    screen
  );


                emit primaryScreenChanged(
                  a1_js
                );
              }
            
    // Class: RSingleApplication
    // Function: lastWindowClosed
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::lastWindowClosedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit lastWindowClosed(
                  
                );
              }
            
    // Class: RSingleApplication
    // Function: focusObjectChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::focusObjectChangedEmitter(
                QObject* focusObject
              ) {
                // convert cpp parameters to js:
                
  // parameter: focusObject (QObject)
  


  QJSValue a1_js = RJSHelper::cpp2js_QObject(
    handler, 
    focusObject
  );


                emit focusObjectChanged(
                  a1_js
                );
              }
            
    // Class: RSingleApplication
    // Function: applicationStateChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::applicationStateChangedEmitter(
                Qt::ApplicationState state
              ) {
                // convert cpp parameters to js:
                
  // parameter: state (Qt::ApplicationState)
  


  QJSValue a1_js = RJSHelper::cpp2js_Qt_ApplicationState(
    handler, 
    state
  );


                emit applicationStateChanged(
                  a1_js
                );
              }
            
    // Class: RSingleApplication
    // Function: layoutDirectionChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::layoutDirectionChangedEmitter(
                Qt::LayoutDirection direction
              ) {
                // convert cpp parameters to js:
                
  // parameter: direction (Qt::LayoutDirection)
  


  QJSValue a1_js = RJSHelper::cpp2js_Qt_LayoutDirection(
    handler, 
    direction
  );


                emit layoutDirectionChanged(
                  a1_js
                );
              }
            
    // Class: RSingleApplication
    // Function: applicationDisplayNameChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::applicationDisplayNameChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit applicationDisplayNameChanged(
                  
                );
              }
            
    // Class: RSingleApplication
    // Function: paletteChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::paletteChangedEmitter(
                const QPalette& pal
              ) {
                // convert cpp parameters to js:
                
  // parameter: pal (QPalette)
  


  QJSValue a1_js = RJSHelper::cpp2js_QPalette(
    handler, 
    pal
  );


                emit paletteChanged(
                  a1_js
                );
              }
            
    // Class: RSingleApplication
    // Function: fontChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::fontChangedEmitter(
                const QFont& font
              ) {
                // convert cpp parameters to js:
                
  // parameter: font (QFont)
  


  QJSValue a1_js = RJSHelper::cpp2js_QFont(
    handler, 
    font
  );


                emit fontChanged(
                  a1_js
                );
              }
            
    // Class: RSingleApplication
    // Function: notify
    // Source: QApplication
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::notify
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QEvent_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        
  // convert js parameter to cpp:  (QEvent)
  

          // pointer:
          QEvent*
         a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QEvent_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                bool res = 
                    
                w->notify(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for notify";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: focusChanged
    // Source: QApplication
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::focusChangedEmitter(
                QWidget* old, QWidget* now
              ) {
                // convert cpp parameters to js:
                
  // parameter: old (QWidget)
  


  QJSValue a1_js = RJSHelper::cpp2js_QWidget(
    handler, 
    old
  );

  // parameter: now (QWidget)
  


  QJSValue a2_js = RJSHelper::cpp2js_QWidget(
    handler, 
    now
  );


                emit focusChanged(
                  a1_js, a2_js
                );
              }
            
    // Class: RSingleApplication
    // Function: styleSheet
    // Source: QApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::styleSheet
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                QString res = 
                    
                w->styleSheet(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for styleSheet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setStyleSheet
    // Source: QApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::setStyleSheet
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
    
  // convert js parameter to cpp: sheet (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->setStyleSheet(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStyleSheet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setAutoSipEnabled
    // Source: QApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::setAutoSipEnabled
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
    
  // convert js parameter to cpp: enabled (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->setAutoSipEnabled(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAutoSipEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: autoSipEnabled
    // Source: QApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::autoSipEnabled
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                bool res = 
                    
                w->autoSipEnabled(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for autoSipEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if defined(Q_OS_X11)

#endif

    // Class: RSingleApplication
    // Function: isRunning
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::isRunning
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                bool res = 
                    
                w->isRunning(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRunning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: id
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::id
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                QString res = 
                    
                w->id(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for id";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setActivationWindow
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::setActivationWindow
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: aw (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        
  // convert js parameter to cpp: activateOnMessage (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->setActivationWindow(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setActivationWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: activationWindow
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::activationWindow
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                QWidget* res = 
                    
                w->activationWindow(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for activationWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: sendMessage
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::sendMessage
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

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: message (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: timeout (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 5000;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                bool res = 
                    
                w->sendMessage(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sendMessage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: activateWindow
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::activateWindow
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSingleApplication* w = getWrapped();
                
                w->activateWindow(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for activateWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: messageReceived
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::messageReceivedEmitter(
                const QString& message
              ) {
                // convert cpp parameters to js:
                
  // parameter: message (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    message
  );


                emit messageReceived(
                  a1_js
                );
              }
            
    // Class: RSingleApplication
    // Function: fileOpenRequestReceived
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::fileOpenRequestReceivedEmitter(
                const QString& fileName
              ) {
                // convert cpp parameters to js:
                
  // parameter: fileName (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    fileName
  );


                emit fileOpenRequestReceived(
                  a1_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rsingleapplication_wrapper.cpp"
  
