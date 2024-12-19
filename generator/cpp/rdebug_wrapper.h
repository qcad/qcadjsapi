
  // Auto generated
  
    #ifndef RDEBUG_H_WRAPPER
    #define RDEBUG_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RDebug.h"
      
      // singleton class wrapper for static functions:
      class QCADJSAPI_EXPORT 
     RDebug_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RDebug_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RDebug
    // Function: printBacktrace
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  printBacktrace
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDebug
    // Function: startTimer
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startTimer
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDebug
    // Function: stopTimer
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stopTimer
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDebug
    // Function: timeStamp
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  timeStamp
              (

                
              )
              
              ;
            
    // Class: RDebug
    // Function: hexDump
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hexDump
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDebug
    // Function: incCounter
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  incCounter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDebug
    // Function: decCounter
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  decCounter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDebug
    // Function: getCounter
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCounter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDebug
    // Function: printCounter
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  printCounter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDebug
    // Function: printCounters
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  printCounters
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDebug
    // Function: setPrefix
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPrefix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDebug
    // Function: getPrefix
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPrefix
              (

                
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static RDebug_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RDebug
    class QCADJSAPI_EXPORT 
     RDebug_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RDebug_Wrapper(const RDebug_Wrapper&);

    public:
      // initialization of RDebug:
      static void init(RJSApi& handler);

      
        static RDebug* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RDebug:
          for (int i=0; i<basecasters_RDebug.length(); i++) {
            RJSBasecaster_RDebug* basecaster = basecasters_RDebug[i];
            RDebug* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RDebug:
          if (t==RJSType_RDebug::getIdStatic()) {
            return (RDebug*)vp;
          }

          qWarning() << "RDebug_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RDebug* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RDebug*: wrapper wraps NULL";
          }

          RDebug* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RDebug*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RDebug_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RDebug_Wrapper(RJSApi& h, RDebug* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RDebug_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
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
          return RJSType_RDebug::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RDebug* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RDebug* getWrapped() const {
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
        RDebug* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RDebug*> basecasters_RDebug;

      public:
        static void registerBasecaster_RDebug(RJSBasecaster_RDebug* bc) {
          basecasters_RDebug.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RDebug_Wrapper*)

    Q_DECLARE_INTERFACE(RDebug_Wrapper, "org.qcad.RDebug_Wrapper")

  
  #endif
  
