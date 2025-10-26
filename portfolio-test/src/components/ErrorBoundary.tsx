import React from "react"

type Props = { children: React.ReactNode; fallback?: React.ReactNode }
type State = { hasError: boolean; error?: Error }

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }
  
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info)
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="p-6 text-red-600 text-center">
          <h1 className="text-2xl font-bold">Something went wrong.</h1>
          <p className="mt-2 text-sm">{this.state.error?.message}</p>
        </div>
      )
    }
    return this.props.children
  }
}
