"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CircleDollarSign } from "lucide-react";

export default function Alert05() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md mx-auto"
        >
            <div
                className={cn(
                    "relative overflow-hidden",
                    "bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/50 dark:to-violet-950/50",
                    "border border-indigo-200 dark:border-indigo-800/50",
                    "shadow-lg",
                    "p-6 rounded-2xl"
                )}
            >
                <div className="flex items-start gap-4">
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        className="flex-shrink-0"
                    >
                        <div
                            className={cn(
                                "w-12 h-12 rounded-2xl rotate-3",
                                "bg-gradient-to-br from-indigo-500 to-violet-500",
                                "flex items-center justify-center",
                                "shadow-lg shadow-indigo-500/20"
                            )}
                        >
                            <CircleDollarSign className="h-6 w-6 text-white" />
                        </div>
                    </motion.div>

                    <div className="flex-1 min-w-0">
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-2"
                        >
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-indigo-950 dark:text-indigo-100">
                                        Payment Received
                                    </h3>
                                    <span className="px-2.5 py-1 rounded-full text-sm font-semibold bg-white/80 dark:bg-white/10 text-indigo-600 dark:text-indigo-300 backdrop-blur-sm">
                                        $2,400.00
                                    </span>
                                </div>
                                <p className="text-sm text-indigo-700 dark:text-indigo-300">
                                    The payment has been processed and added to
                                    your account
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -left-8 -top-8 w-32 h-32 rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-3xl" />
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-violet-400/20 dark:bg-violet-600/10 blur-3xl" />
                </div>
            </div>
        </motion.div>
    );
}
