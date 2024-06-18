

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RDOCKWIDGET_H_BASE
  #define RDOCKWIDGET_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RDockWidget.h"
      
    // Base class for RDockWidget
      class RDockWidget_Base : public RDockWidget {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RDockWidget
  // Function: 
  // Parameters: 3
  // preceding Parameters: -1
RDockWidget_Base
        
      (

        
          RJSApi& _h
          
            ,
          const QString& title, QWidget* parent=NULL, Qt::WindowFlags flags=RDEFAULT_QT_WINDOWFLAGS
      )
      
        : RDockWidget(
          title, parent, flags
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: RDockWidget
  // Function: 
  // Parameters: 2
  // preceding Parameters: 3
RDockWidget_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=NULL, Qt::WindowFlags flags=RDEFAULT_QT_WINDOWFLAGS
      )
      
        : RDockWidget(
          parent, flags
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#ifdef Q_OS_MAC

#if (QT_VERSION>=0x050601&&QT_VERSION<=0x050602)||QT_VERSION>=0x050F00

#endif

#endif

    // destructor:
    virtual ~RDockWidget_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
        RJSApi& handler;
      
      //bool recFlag;

    };
    
  #endif
  