
  // Auto generated
  
    #ifndef RSINGLEAPPLICATION_H_WRAPPER
    #define RSINGLEAPPLICATION_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RLocalPeer.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RSingleApplication.h"
      
      // wrapped object is RSingleApplication_Base class if new object is created: 
      #include "rsingleapplication_base.h"
    
      // singleton class wrapper for static functions:
      class QCADJSAPI_EXPORT 
     RSingleApplication_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RSingleApplication_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
#if defined(Q_OS_X11)

#endif

    // Class: RSingleApplication
    // Function: getInstance
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getInstance
              (

                
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static RSingleApplication_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RSingleApplication
    class QCADJSAPI_EXPORT 
     RSingleApplication_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )

  Q_PROPERTY(
    
    QJSValue
     applicationName READ applicationName WRITE setApplicationName
  )

  Q_PROPERTY(
    
    QJSValue
     applicationVersion READ applicationVersion WRITE setApplicationVersion
  )

  Q_PROPERTY(
    
    QJSValue
     organizationDomain READ organizationDomain WRITE setOrganizationDomain
  )

  Q_PROPERTY(
    
    QJSValue
     organizationName READ organizationName WRITE setOrganizationName
  )

  Q_PROPERTY(
    
    QJSValue
     quitLockEnabled READ isQuitLockEnabled WRITE setQuitLockEnabled
  )

  Q_PROPERTY(
    
    QJSValue
     doubleClickInterval READ doubleClickInterval WRITE setDoubleClickInterval
  )

  Q_PROPERTY(
    
    QJSValue
     keyboardInputInterval READ keyboardInputInterval WRITE setKeyboardInputInterval
  )

  Q_PROPERTY(
    
    QJSValue
     wheelScrollLines READ wheelScrollLines WRITE setWheelScrollLines
  )

  Q_PROPERTY(
    
    QJSValue
     startDragTime READ startDragTime WRITE setStartDragTime
  )

  Q_PROPERTY(
    
    QJSValue
     startDragDistance READ startDragDistance WRITE setStartDragDistance
  )

  Q_PROPERTY(
    
    QJSValue
     styleSheet READ styleSheet WRITE setStyleSheet
  )

  Q_PROPERTY(
    
    QJSValue
     autoSipEnabled READ autoSipEnabled WRITE setAutoSipEnabled
  )


    private:
      // disable copy constructor:
      RSingleApplication_Wrapper(const RSingleApplication_Wrapper&);

    public:
      // initialization of RSingleApplication:
      static void init(RJSApi& handler);

      
        static RSingleApplication* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RSingleApplication:
          for (int i=0; i<basecasters_RSingleApplication.length(); i++) {
            RJSBasecaster_RSingleApplication* basecaster = basecasters_RSingleApplication[i];
            RSingleApplication* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RSingleApplication:
          if (t==RJSType_RSingleApplication::getIdStatic()) {
            return (RSingleApplication*)vp;
          }

          qWarning() << "RSingleApplication_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RSingleApplication* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RSingleApplication*: wrapper wraps NULL";
          }

          RSingleApplication* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RSingleApplication*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RSingleApplication_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RSingleApplication_Wrapper(RJSApi& h, RSingleApplication* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RSingleApplication_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

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

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectName
              (

                
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWidgetType
              (

                
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWindowType
              (

                
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  signalsBlocked
              (

                
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  blockSignals
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  findChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  children
              (

                
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: setParent
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setParent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  installEventFilter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeEventFilter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dumpObjectTree
              (

                
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dumpObjectInfo
              (

                
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  property
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dynamicPropertyNames
              (

                
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: parent
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parent
              (

                
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deleteLater
              (

                
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: setOrganizationDomain
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOrganizationDomain
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: organizationDomain
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  organizationDomain
              (

                
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: setOrganizationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOrganizationName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: organizationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  organizationName
              (

                
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: setApplicationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setApplicationName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: applicationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationName
              (

                
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: setApplicationVersion
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setApplicationVersion
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: applicationVersion
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationVersion
              (

                
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: isQuitLockEnabled
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isQuitLockEnabled
              (

                
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: setQuitLockEnabled
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setQuitLockEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: organizationNameChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void organizationNameChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void organizationNameChangedEmitter(
                
              );
            
    // Class: RSingleApplication
    // Function: organizationDomainChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void organizationDomainChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void organizationDomainChangedEmitter(
                
              );
            
    // Class: RSingleApplication
    // Function: applicationNameChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void applicationNameChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void applicationNameChangedEmitter(
                
              );
            
    // Class: RSingleApplication
    // Function: applicationVersionChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void applicationVersionChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void applicationVersionChangedEmitter(
                
              );
            
    // Class: RSingleApplication
    // Function: devicePixelRatio
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  devicePixelRatio
              (

                
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: isSessionRestored
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSessionRestored
              (

                
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: sessionId
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sessionId
              (

                
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: sessionKey
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sessionKey
              (

                
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: isSavingSession
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSavingSession
              (

                
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: fontDatabaseChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void fontDatabaseChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void fontDatabaseChangedEmitter(
                
              );
            
    // Class: RSingleApplication
    // Function: screenAdded
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void screenAdded(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void screenAddedEmitter(
                QScreen* screen
              );
            
    // Class: RSingleApplication
    // Function: screenRemoved
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void screenRemoved(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void screenRemovedEmitter(
                QScreen* screen
              );
            
    // Class: RSingleApplication
    // Function: primaryScreenChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void primaryScreenChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void primaryScreenChangedEmitter(
                QScreen* screen
              );
            
    // Class: RSingleApplication
    // Function: lastWindowClosed
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void lastWindowClosed(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void lastWindowClosedEmitter(
                
              );
            
    // Class: RSingleApplication
    // Function: focusObjectChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void focusObjectChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void focusObjectChangedEmitter(
                QObject* focusObject
              );
            
    // Class: RSingleApplication
    // Function: applicationStateChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void applicationStateChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void applicationStateChangedEmitter(
                Qt::ApplicationState state
              );
            
    // Class: RSingleApplication
    // Function: layoutDirectionChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void layoutDirectionChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void layoutDirectionChangedEmitter(
                Qt::LayoutDirection direction
              );
            
    // Class: RSingleApplication
    // Function: applicationDisplayNameChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void applicationDisplayNameChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void applicationDisplayNameChangedEmitter(
                
              );
            
    // Class: RSingleApplication
    // Function: paletteChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void paletteChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void paletteChangedEmitter(
                const QPalette& pal
              );
            
    // Class: RSingleApplication
    // Function: fontChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void fontChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void fontChangedEmitter(
                const QFont& font
              );
            
    // Class: RSingleApplication
    // Function: notify
    // Source: QApplication
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  notify
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: focusChanged
    // Source: QApplication
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void focusChanged(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void focusChangedEmitter(
                QWidget* old, QWidget* now
              );
            
    // Class: RSingleApplication
    // Function: styleSheet
    // Source: QApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  styleSheet
              (

                
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: setStyleSheet
    // Source: QApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStyleSheet
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: setAutoSipEnabled
    // Source: QApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAutoSipEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: autoSipEnabled
    // Source: QApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  autoSipEnabled
              (

                
              )
              
                const
              
              ;
            
#if defined(Q_OS_X11)

#endif

    // Class: RSingleApplication
    // Function: isRunning
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isRunning
              (

                
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: id
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  id
              (

                
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: setActivationWindow
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setActivationWindow
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: activationWindow
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  activationWindow
              (

                
              )
              
                const
              
              ;
            
    // Class: RSingleApplication
    // Function: sendMessage
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sendMessage
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: activateWindow
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  activateWindow
              (

                
              )
              
              ;
            
    // Class: RSingleApplication
    // Function: messageReceived
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void messageReceived(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void messageReceivedEmitter(
                const QString& message
              );
            
    // Class: RSingleApplication
    // Function: fileOpenRequestReceived
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void fileOpenRequestReceived(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void fileOpenRequestReceivedEmitter(
                const QString& fileName
              );
            
  // read static property doubleClickInterval:
  Q_INVOKABLE QJSValue doubleClickInterval() {
    return handler.getEngine()->globalObject().property("RSingleApplication_WrapperSingleton").property("doubleClickInterval").call();

    
  }

  
    // write static property doubleClickInterval:
    Q_INVOKABLE QJSValue setDoubleClickInterval(const QJSValue& arg) {
      return handler.getEngine()->globalObject().property("RSingleApplication_WrapperSingleton").property("setDoubleClickInterval").call(QJSValueList() << arg);
      
    }
  
  // read static property keyboardInputInterval:
  Q_INVOKABLE QJSValue keyboardInputInterval() {
    return handler.getEngine()->globalObject().property("RSingleApplication_WrapperSingleton").property("keyboardInputInterval").call();

    
  }

  
    // write static property keyboardInputInterval:
    Q_INVOKABLE QJSValue setKeyboardInputInterval(const QJSValue& arg) {
      return handler.getEngine()->globalObject().property("RSingleApplication_WrapperSingleton").property("setKeyboardInputInterval").call(QJSValueList() << arg);
      
    }
  
  // read static property wheelScrollLines:
  Q_INVOKABLE QJSValue wheelScrollLines() {
    return handler.getEngine()->globalObject().property("RSingleApplication_WrapperSingleton").property("wheelScrollLines").call();

    
  }

  
    // write static property wheelScrollLines:
    Q_INVOKABLE QJSValue setWheelScrollLines(const QJSValue& arg) {
      return handler.getEngine()->globalObject().property("RSingleApplication_WrapperSingleton").property("setWheelScrollLines").call(QJSValueList() << arg);
      
    }
  
  // read static property startDragTime:
  Q_INVOKABLE QJSValue startDragTime() {
    return handler.getEngine()->globalObject().property("RSingleApplication_WrapperSingleton").property("startDragTime").call();

    
  }

  
    // write static property startDragTime:
    Q_INVOKABLE QJSValue setStartDragTime(const QJSValue& arg) {
      return handler.getEngine()->globalObject().property("RSingleApplication_WrapperSingleton").property("setStartDragTime").call(QJSValueList() << arg);
      
    }
  
  // read static property startDragDistance:
  Q_INVOKABLE QJSValue startDragDistance() {
    return handler.getEngine()->globalObject().property("RSingleApplication_WrapperSingleton").property("startDragDistance").call();

    
  }

  
    // write static property startDragDistance:
    Q_INVOKABLE QJSValue setStartDragDistance(const QJSValue& arg) {
      return handler.getEngine()->globalObject().property("RSingleApplication_WrapperSingleton").property("setStartDragDistance").call(QJSValueList() << arg);
      
    }
  
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            
              if (wrapped!=nullptr) {
                
                    delete wrapped;
                  
                wrapped = nullptr;
              }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_RSingleApplication::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RSingleApplication* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RSingleApplication* getWrapped() const {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        
          // get wrapped base object or nullptr:
          RSingleApplication_Base* getWrappedBase() {
            RSingleApplication* w = getWrapped();
            return dynamic_cast<RSingleApplication_Base*>(w);
          }

          RSingleApplication_Base* getWrappedBase() const {
            RSingleApplication* w = getWrapped();
            return dynamic_cast<RSingleApplication_Base*>(w);
          }
        

        bool hasWrapped() const {
          
            return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          
            if (wrapped!=nullptr) {
              return (unsigned long long int)wrapped;
            }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        
          //void setRecFlag(bool on) const {
          //  RSingleApplication_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:

        
          // wrapped object:
          RSingleApplication* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RSingleApplication*> basecasters_RSingleApplication;

      public:
        static void registerBasecaster_RSingleApplication(RJSBasecaster_RSingleApplication* bc) {
          basecasters_RSingleApplication.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RSingleApplication_Wrapper*)

    Q_DECLARE_INTERFACE(RSingleApplication_Wrapper, "org.qcad.RSingleApplication_Wrapper")

  
  #endif
  
