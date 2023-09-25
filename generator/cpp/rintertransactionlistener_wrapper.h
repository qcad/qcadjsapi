
  // Auto generated
  
    #ifndef RINTERTRANSACTIONLISTENER_H_WRAPPER
    #define RINTERTRANSACTIONLISTENER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocument.h"
      
        #include "REntity.h"
      
        #include "RTransaction.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RInterTransactionListener.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RInterTransactionListener
    class RInterTransactionListener_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RInterTransactionListener_Wrapper(const RInterTransactionListener_Wrapper&);

    public:
      // initialization of RInterTransactionListener:
      static void init(RJSApi& handler);

      
        static RInterTransactionListener* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          
            if (t==RJSType_RInterTransactionListenerAdapter::getIdStatic()) {
              return (RInterTransactionListener*)(RInterTransactionListenerAdapter*)vp;
            }
            

          // pointer to desired type:
          if (t==RJSType_RInterTransactionListener::getIdStatic()) {
            return (RInterTransactionListener*)vp;
          }

          return nullptr;
          
        }

        static RInterTransactionListener* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RInterTransactionListener*: wrapper wraps NULL";
          }

          RInterTransactionListener* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RInterTransactionListener*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RInterTransactionListener_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RInterTransactionListener_Wrapper(RJSApi& h, RInterTransactionListener* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RInterTransactionListener_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: RInterTransactionListener
    // Function: updateInterTransactionListener
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateInterTransactionListener
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
          return RJSType_RInterTransactionListener::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RInterTransactionListener* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RInterTransactionListener* getWrapped() const {
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

        

        private:
        // wrapped object:
        RInterTransactionListener* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(RInterTransactionListener_Wrapper*)

    Q_DECLARE_INTERFACE(RInterTransactionListener_Wrapper, "org.qcad.RInterTransactionListener_Wrapper")

  
  #endif
  