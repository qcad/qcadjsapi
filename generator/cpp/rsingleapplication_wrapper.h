
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
      class RSingleApplication_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RSingleApplication_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

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
    class RSingleApplication_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RSingleApplication_Wrapper(const RSingleApplication_Wrapper&);

    public:
      // initialization of RSingleApplication:
      static void init(RJSApi& handler);

      
        static RSingleApplication* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          if (t==RJSType_RSingleApplication::getIdStatic()) {
            return (RSingleApplication*)vp;
          }

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
      
    };

    Q_DECLARE_METATYPE(RSingleApplication_Wrapper*)

    Q_DECLARE_INTERFACE(RSingleApplication_Wrapper, "org.qcad.RSingleApplication_Wrapper")

  
  #endif
  