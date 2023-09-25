
  // Auto generated
  
    #ifndef RINTERTRANSACTIONLISTENERADAPTER_H_WRAPPER
    #define RINTERTRANSACTIONLISTENERADAPTER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RInterTransactionListenerAdapter.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RInterTransactionListenerAdapter
    class RInterTransactionListenerAdapter_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RInterTransactionListenerAdapter_Wrapper(const RInterTransactionListenerAdapter_Wrapper&);

    public:
      // initialization of RInterTransactionListenerAdapter:
      static void init(RJSApi& handler);

      
        static RInterTransactionListenerAdapter* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          if (t==RJSType_RInterTransactionListenerAdapter::getIdStatic()) {
            return (RInterTransactionListenerAdapter*)vp;
          }

          return nullptr;
          
        }

        static RInterTransactionListenerAdapter* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RInterTransactionListenerAdapter*: wrapper wraps NULL";
          }

          RInterTransactionListenerAdapter* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RInterTransactionListenerAdapter*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RInterTransactionListenerAdapter_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RInterTransactionListenerAdapter_Wrapper(RJSApi& h, RInterTransactionListenerAdapter* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RInterTransactionListenerAdapter_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RInterTransactionListenerAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RInterTransactionListenerAdapter_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: RInterTransactionListenerAdapter
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
            
    // Class: RInterTransactionListenerAdapter
    // Function: transactionInProgress
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void transactionInProgress(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void transactionInProgressEmitter(
                RDocument* doc, RTransaction* transaction
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
          return RJSType_RInterTransactionListenerAdapter::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RInterTransactionListenerAdapter* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RInterTransactionListenerAdapter* getWrapped() const {
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
        RInterTransactionListenerAdapter* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(RInterTransactionListenerAdapter_Wrapper*)

    Q_DECLARE_INTERFACE(RInterTransactionListenerAdapter_Wrapper, "org.qcad.RInterTransactionListenerAdapter_Wrapper")

  
  #endif
  