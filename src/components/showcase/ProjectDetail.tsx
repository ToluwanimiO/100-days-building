"use client";

import { Project, ObjectiveWeights } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Link as LinkIcon,
  Share2,
} from "lucide-react";

interface ProjectDetailProps {
  project: Project;
  previousProject?: Project;
  nextProject?: Project;
}

export default function ProjectDetail({
  project,
  previousProject,
  nextProject,
}: ProjectDetailProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${project.title} - Day ${project.dayNumber}`,
          text: project.shortDescription,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <article className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative">
        {/* Cover image */}
        {project.coverImage && (
          <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
        )}

        {/* Navigation */}
        <nav className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors backdrop-blur-sm px-4 py-2 rounded-lg bg-black/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all builds
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </nav>

        {/* Project info overlay */}
        <div className="container mx-auto px-6 -mt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium mb-4">
              DAY {project.dayNumber}
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              {project.shortDescription}
            </p>

            <div className="flex items-center gap-6 flex-wrap">
              <span className="text-sm text-muted-foreground">
                {formatDate(project.date)}
              </span>

              <div className="flex items-center gap-2 flex-wrap">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-background/80 backdrop-blur-sm border border-border rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.links.length > 0 && (
              <div className="flex items-center gap-4 mt-8">
                {project.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    {link.type === "github" ? (
                      <LinkIcon className="w-4 h-4" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}{" "}
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Why I Built This */}
          {project.problem && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">Why I Built This</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </motion.section>
          )}

          {/* Technical Deep Dive */}
          {project.technicalDive && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {project.technicalDive.title}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.technicalDive.introduction}
                </p>
              </div>

              {/* Technical Sections */}
              {project.technicalDive.sections.length > 0 && (
                <div className="space-y-8">
                  {project.technicalDive.sections.map((section) => (
                    <div key={section.id}>
                      <h3 className="text-xl font-semibold mb-3">
                        {section.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Objective Weights */}
              {project.technicalDive.objectiveWeights && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Objective Function Weights
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {(
                      Object.entries(
                        project.technicalDive.objectiveWeights,
                      ) as [keyof ObjectiveWeights, number][]
                    ).map(([key, weight]) => (
                      <div key={key} className="p-4 bg-muted/30 rounded-lg">
                        <div className="flex justify-between gap-4 mb-2">
                          <span className="text-sm text-muted-foreground">
                            {
                              {
                                deadlineSuccess: "Deadline Success",
                                workCoverage: "Work Coverage",
                                priorityAlignment: "Priority Alignment",
                                preferenceSatisfaction:
                                  "Preference Satisfaction",
                              }[key]
                            }
                          </span>

                          <span className="font-semibold">
                            {(weight * 100).toFixed(0)}%
                          </span>
                        </div>

                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${weight * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Search Configuration */}
              {project.technicalDive.searchConfiguration && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Search Configuration
                  </h3>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      {
                        label: "Beam Width",
                        value:
                          project.technicalDive.searchConfiguration.beamWidth,
                      },
                      {
                        label: "Maximum Search Steps",
                        value:
                          project.technicalDive.searchConfiguration
                            .maxSearchSteps,
                      },
                      {
                        label: "Candidate Start Interval",
                        value: `${project.technicalDive.searchConfiguration.candidateStartIntervalMinutes} minutes`,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="p-4 bg-muted/30 rounded-lg"
                      >
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.label}
                        </p>
                        <p className="text-2xl font-bold">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Search Statistics */}
              {project.technicalDive.searchStatistics && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Search Statistics
                  </h3>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        label: "Candidates Generated",
                        value:
                          project.technicalDive.searchStatistics.candidatesGenerated.toLocaleString(),
                      },
                      {
                        label: "Candidates Rejected",
                        value:
                          project.technicalDive.searchStatistics.candidatesRejected.toLocaleString(),
                      },
                      {
                        label: "Valid State Expansions",
                        value:
                          project.technicalDive.searchStatistics.validStateExpansionsBeforeDeduplication.toLocaleString(),
                      },
                      {
                        label: "Final Beam Size",
                        value:
                          project.technicalDive.searchStatistics.finalBeamSize.toLocaleString(),
                      },
                      {
                        label: "Best Scheduled Time",
                        value: `${project.technicalDive.searchStatistics.bestScheduledMinutes} min`,
                      },
                      {
                        label: "Best Weighted Score",
                        value:
                          project.technicalDive.searchStatistics.bestWeightedScore.toString(),
                      },
                    ].map((item) => (
                      <div key={item.label} className="p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.label}
                        </p>
                        <p className="text-2xl font-bold">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Algorithm Comparison */}
              {project.technicalDive.comparison &&
                project.technicalDive.comparison.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Algorithm Comparison
                    </h3>

                    <div className="overflow-x-auto rounded-lg border">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50">
                          <tr>
                            <th className="p-4 font-semibold">Metric</th>
                            <th className="p-4 font-semibold">Greedy</th>
                            <th className="p-4 font-semibold">Optimizer</th>
                          </tr>
                        </thead>

                        <tbody>
                          {project.technicalDive.comparison.map((item) => (
                            <tr key={item.metric} className="border-t">
                              <td className="p-4 font-medium">{item.metric}</td>
                              <td className="p-4 text-muted-foreground">
                                {item.greedy}
                              </td>
                              <td className="p-4 font-medium">
                                {item.optimizer}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

              {/* Code References */}
              {project.technicalDive.codeReferences &&
                project.technicalDive.codeReferences.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Code References
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.technicalDive.codeReferences.map((reference) => (
                        <div
                          key={reference.path}
                          className="p-4 bg-muted/30 rounded-lg"
                        >
                          <p className="font-medium mb-2">{reference.label}</p>
                          <code className="text-sm text-muted-foreground break-all">
                            {reference.path}
                          </code>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Run Command */}
              {project.technicalDive.runCommand && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Run the Experiment
                  </h3>

                  <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                    <code>{project.technicalDive.runCommand}</code>
                  </pre>
                </div>
              )}

              {/* Conclusion */}
              <div className="p-6 rounded-xl bg-muted/30 border">
                <h3 className="text-xl font-semibold mb-3">
                  Findings and Limitations
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.technicalDive.conclusion}
                </p>
              </div>
            </motion.section>
          )}

          {/* What I Built */}
          {project.technicalDive
            ? ""
            : project.solution && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="text-2xl font-bold mb-4">What I Built</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>

                  {project.features.length > 0 && (
                    <div className="mt-8 grid md:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.section>
              )}

          {/* How To Use It */}
          {project.instructions.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">How To Use It</h2>
              <div className="space-y-6">
                {project.instructions.map((step, index) => (
                  <div key={step.id} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Behind The Build */}
          {(project.challenges || project.lessons || project.buildNotes) && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">Behind The Build</h2>

              {project.buildNotes && (
                <div className="mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.buildNotes}
                  </p>
                </div>
              )}

              {project.challenges && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Challenges</h3>
                  <p className="text-muted-foreground">{project.challenges}</p>
                </div>
              )}

              {project.lessons && (
                <div className="p-6 bg-accent/50 rounded-lg">
                  <h3 className="font-semibold mb-2">What I Learned</h3>
                  <p className="text-muted-foreground italic">
                    &quot;{project.lessons}&quot;
                  </p>
                </div>
              )}
            </motion.section>
          )}

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-between pt-8 border-t border-border"
          >
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.slug}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest mb-1">
                    Previous Build
                  </p>
                  <p className="font-medium">
                    Day {previousProject.dayNumber}: {previousProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest mb-1">
                    Next Build
                  </p>
                  <p className="font-medium">
                    Day {nextProject.dayNumber}: {nextProject.title}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <div />
            )}
          </motion.nav>
        </div>
      </div>
    </article>
  );
}
